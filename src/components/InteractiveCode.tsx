'use client'

import React, { useState, useEffect } from 'react';


const InteractiveCode: React.FC = () => {
  const [code, setCode] = useState<string[]>([
    "function greet(name) {",
    "  return `👋 Salut, ${name} ! 🎉 Bienvenue sur mon portfolio 🚀. Explore mon travail, mes projets 💻 et mes passions ❤️ !`;",
    "}",
    //"",
    //"// The name below will be used in the greeting",
    //"console.log(greet(name));"
  ]);

  // Liste de noms possibles
  const names = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Liam", "Sophia", "Mia", "Noah", "Olivia",
    "Louis", "Emma", "Gabriel", "Chloé", "Lucas", "Camille", "Nathan", "Zoé", "Léa", "Julien",
    "Léna", "Mathis", "Sarah", "Arthur", "Inès", "Thomas", "Clara", "Raphaël", "Margaux", "Jules",
    "Manon", "Maxime", "Louise", "Louis", "Théo", "Lola", "Alexandre", "Eva", "Clément", "Lucie",
    "Louis", "Sophie", "Léon", "Valentine", "Gabrielle", "Anaïs", "Lucas", "Romain", "Mélanie",
    "Mathilde", "Paul", "Amélie", "Antoine", "Célia", "Victor", "Violette", "Martin", "Élise",
    "Benoît", "Charly", "Noémie", "Élise", "Simone", "Bastien", "Pierre", "Emilie", "Solène",
    "Bernadette", "Catherine", "Fanny", "Juliette", "Axelle", "Rémi", "Estelle", "Éléonore",
    "Léonard", "Jean", "Félix", "Aurélie", "Luc", "Frédéric", "Delphine", "Bernadette", "Sacha",
    "Lucienne", "Nina", "Rose", "Jean-Baptiste", "Gaspard", "Nicolas", "Céline", "Arnaud",
    "Alice", "Anouk", "Michel", "Vivienne", "Léo", "Suzanne", "Cécile", "Mélissa", "Antoine",
    "Hugo", "Marlène", "Louis", "Jeanne", "Laurence", "Kilian", "Maxence", "Lise", "Jacques",
    "Sébastien", "Odile", "Claire", "Yannick", "Valérie", "Thibault", "Tanguy", "Thérèse",
    "Charles", "Maëlle", "Cynthia", "Marc", "Benjamin", "René", "Maurice", "Marion", "Yasmine",
    "Victorine", "Alban", "Lison", "Agathe", "Laurent", "Céline", "Laurie", "Clémentine",
    "Jacqueline", "Annie", "Adrien", "Charlotte", "Béatrice", "Jean-Paul", "Vincent", "Sarah",
    "Claude", "Isabelle", "Béatrice", "Amandine", "Frédéric", "Claire", "Evelyne", "Baptiste",
    "Isabelle", "Alice", "Solange", "Ludovic", "Fabrice", "Marcel", "Sandy", "Gérard", "Mireille",
    "Lilian", "Thierry", "Yves", "Vivian", "Laure", "Adèle", "Odette", "Solène", "Emmanuel",
    "Amandine", "Rosalie", "Géraldine", "Jean", "Edith", "Martine", "Robert", "Bernadette", "Caroline",
    "Françoise", "Franck", "Patricia", "Christiane", "Lydia", "Daniel", "Marguerite", "Louisette",
    "Michel", "Victor", "Philippe", "Bernadette", "Gérard", "Monique", "Pauline", "Manon", "Lucille",
    "Joséphine", "Alice", "Eugénie", "Nadine", "Jocelyne", "Jacques", "Simone", "Frédéric", "Gérard" , "Stacy" , "Greg", "Level",
    "Romain", "Mélissa", "Mickael", "Morgane","Falone"
  ];


  const [name, setName] = useState<string>("Visiteur");
  const [output, setOutput] = useState<string>("");

  const generateRandomName = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName); // Mise à jour du nom
  };


  useEffect(() => {
    try {
      const func = new Function('name', `
        ${code.join('\n')}
        return greet(name);
      `);
      setOutput(func(name));
    } catch (error) {
      setOutput("Error: " + (error as Error).message);
    }
  }, [code, name]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <div className={`bg-gray-900 p-6 rounded-2xl shadow-lg md:col-span-1 lg:col-span-2 flex-grow`}>
      <h2 className="text-2xl font-bold mb-4 text-white">Snippet de code interactif</h2>
      <div className="mb-4">
        {code.map((line, index) => (
          <input
            key={index}
            value={line}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            className="w-full bg-gray-800 text-green-400 p-1 font-mono text-sm mb-1 rounded"
          />
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Entre un nom:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
          placeholder="Enter a name"
        />
      </div>
      <div className="mb-4">
        <button
            onClick={generateRandomName}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Generer un nom aléatoire
        </button>
      </div>
      <div className="bg-black p-4 rounded-lg">
        <p className="text-white font-mono"> <span className="text-yellow-400">{output}</span></p>
      </div>
    </div>
  );
}

export default InteractiveCode;