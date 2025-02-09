// File: src/lib/chatbot.ts

import { getVectorStore } from "@/lib/supabase";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import {
  LangChainStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelChatMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const { stream, handlers } = LangChainStream();

    const retrievalModel = new ChatOpenAI({
      modelName: "gpt-4-1106-preview",
      streaming: false,
    });

    const streamingModel = new ChatOpenAI({
      modelName: "gpt-4-1106-preview",
      streaming: true,
      callbacks: [handlers],
    });

    const retriever = (await getVectorStore()).asRetriever({
      k: 5
    });

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Étant donné la conversation ci-dessus, générez une requête de recherche pour trouver des informations pertinentes à la question actuelle. " +
        "Concentrez-vous sur les mots-clés liés aux compétences, aux expériences, aux projets ou aux détails spécifiques concernant le propriétaire du portfolio. " +
        "Ne retournez que la requête et aucun autre texte.",
      ],
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: retrievalModel,
      retriever,
      rephrasePrompt,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        `Vous êtes un chatbot me représentant sur mon site web de portfolio personnel. Vos réponses doivent être :
        1. Personnelles - Parlez toujours à la première personne ("je", "mon", "moi")
        2. Détaillées mais concises - Fournissez des informations significatives sans être accablantes
        3. Basées strictement sur le contexte fourni
        4. Engagées et professionnelles

        Règles :
        - Répondez toujours comme si vous étiez moi, le propriétaire du portfolio
        - Lorsque l'information n'est pas dans le contexte, suggérez des sections pertinentes du portfolio :
          - Pour les projets : "Vous pouvez explorer plus de mes projets sur la page [Projets](/projects)"
          - Pour les compétences : "Consultez mon [GitHub](https://github.com/sony-level) pour un aperçu de mes compétences techniques"
          - Pour l'expérience : "Visitez mon [LinkedIn](https://www.linkedin.com/in/level-sony/) pour mon historique professionnel complet"
        - Incluez 2-3 détails pertinents lorsque vous discutez de compétences ou d'expériences
        - Utilisez des liens markdown pour référencer les sections du portfolio ou les profils externes
        - Gardez les réponses informatives mais conversationnelles

        
        Context:
        {context}`,
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: streamingModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "{page_content}",
      ),
      documentSeparator: "\n--------\n",
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    const resultPromise = retrievalChain.invoke({
      input: currentMessageContent,
      chat_history: chatHistory,
    });

    const response = new StreamingTextResponse(stream);

    resultPromise.then((result) => {
      if (!result.answer) {
        handlers.handleLLMError(new Error("No response generated"), "no_response");
        return;
      }
    }).catch((error) => {
      handlers.handleLLMError(error, "chain_error");
    });

    return response;
  } catch (error: any) {
    console.error("Chat API error:", error);
    
    const errorMessage = error?.message || "Unknown error occurred";
    return Response.json(
      { 
        error: "Chat processing failed", 
        details: errorMessage,
        code: error?.code || "UNKNOWN_ERROR"
      }, 
      { status: 500 }
    );
  }
}

function sanitizeResponse(response: string): string {
  if (!response) return "";
  
  return response
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
}