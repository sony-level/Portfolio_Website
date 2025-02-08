"use client";

import { ReactTerminal } from "react-terminal";
import { useState } from "react";

const InteractiveTerminal = () => {
  const [currentPath, setCurrentPath] = useState("~");
  const [history, setHistory] = useState<string[]>([]);
  const [directories, setDirectories] = useState<string[]>(["projects", "blog", "contact"]);
  const [output, setOutput] = useState<string>("");

  // Fonction pour ajouter une commande à l'historique
  const addToHistory = (cmd: string, result: string) => {
    setHistory((prev) => [...prev, cmd]);
    setOutput(result);
  };

  // Gestion des commandes
  const handleCommand = (command: string, args: string[]) => {
    switch (command) {
      case "help":
        addToHistory(command, 
          `Commandes disponibles :\n- whoami\n- about\n- skills\n- projects\n- contact\n- cd [dir]\n- ls\n- mkdir [dir]\n- echo [txt]\n- date\n- history\n- clear\n- exit`
        );
        break;
      case "whoami":
        addToHistory(command, "Level Sony M.");
        break;
      case "about":
        addToHistory(command, "Étudiant en ingénierie informatique, spécialisé en cybersécurité et développement.");
        break;
      case "skills":
        addToHistory(command, "Compétences :\n- Cybersécurité\n- Développement (React, Node.js, Python)\n- DevOps (Docker, Kubernetes, CI/CD)");
        break;
      case "projects":
        addToHistory(command, "Projets récents :\n- Gestion de projets sécurisé\n- Déploiement Kubernetes\n- Application IoT sécurisée");
        break;
      case "contact":
        addToHistory(command, "Email : monemail@example.com\nLinkedIn : https://linkedin.com/in/levelsony");
        break;
      case "cd":
        if (args.length > 0 && directories.includes(args[0])) {
          setCurrentPath(`~/${args[0]}`);
          addToHistory(`cd ${args[0]}`, `Répertoire changé : ~/${args[0]}`);
        } else {
          addToHistory(`cd ${args[0]}`, `Erreur : Répertoire "${args[0]}" introuvable.`);
        }
        break;
      case "ls":
        addToHistory("ls", directories.join("\n"));
        break;
      case "mkdir":
        if (args.length > 0 && !directories.includes(args[0])) {
          setDirectories([...directories, args[0]]);
          addToHistory(`mkdir ${args[0]}`, `Répertoire "${args[0]}" créé.`);
        } else {
          addToHistory(`mkdir ${args[0]}`, `Erreur : Répertoire "${args[0]}" existe déjà.`);
        }
        break;
      case "echo":
        addToHistory(`echo ${args.join(" ")}`, args.join(" "));
        break;
      case "date":
        addToHistory("date", new Date().toLocaleString());
        break;
      case "history":
        addToHistory("history", history.join("\n"));
        break;
      case "clear":
        setHistory([]);
        setOutput("");
        break;
      case "exit":
        addToHistory("exit", "Terminal fermé. (Simulation)");
        break;
      default:
        addToHistory(command, `Commande inconnue : ${command}`);
    }
  };

  return (
    <div className="p-4 bg-black text-white h-[400px] rounded-lg shadow-lg">
      <ReactTerminal
        prompt={`${currentPath} $ `}
        welcomeMessage={"Bienvenue dans mon terminal!\nTapez 'help' pour voir les commandes.\n"}
        commands={(cmd: { split: (arg0: string) => [any, ...any[]]; }) => {
          const [command, ...args] = cmd.split(" ");
          handleCommand(command, args);
        }}
        theme="matrix"
      />
      <div className="mt-2 p-2 text-green-400">{output}</div>
    </div>
  );
};

export default InteractiveTerminal;
