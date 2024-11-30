"use client";

import { useState } from "react";
import Link from "next/link";


const ZibbTitle = () => {
  const theTitle = "D&D Character Creator";

  return (
    <h1 className="font-unifrakturCook text-8xl text-purple-500 font-bold mb-8">{theTitle}</h1>
  );
};

const CharacterInputBox = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-purple-600 text-lg mb-2">{label}</label>
      <input
        type="text"
        value={value} // Make sure the value is passed correctly here
        onChange={onChange} // onChange should update the state correctly
        className="p-2 rounded border border-gray-400 w-full text-violet-500"
        placeholder="Enter character name"
      />
    </div>
  );
};


const CharacterSummary = ({ character }) => {
  return (
    <div className="font-syneMono">
      <h1>{character.name}</h1>
      <h2>class: {character.class ? character.class : "none chosen"}</h2>
      <h2>race: {character.race ? character.race : "none chosen"}</h2>
      <h2>attributes:</h2>
      <h3>strength: {character.attributes.strength}</h3>
      <h3>dexterity: {character.attributes.dexterity}</h3>
      <h3>constitution: {character.attributes.constitution}</h3>
      <h3>intelligence: {character.attributes.intelligence}</h3>
      <h3>wisdom: {character.attributes.wisdom}</h3>
      <h3>charisma: {character.attributes.charisma}</h3>
    </div>
  );
};

export default function Home() {
  const [selectedClass, setSelectedClass] = useState("none selected");
  const [selectedRace, setSelectedRace] = useState("none selected");

  const [attributes, setAttributes] = useState({
    intelligence: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    charisma: 0,
    randomized: false,
  });

  const [characterName, setCharacterName] = useState("Default Name");

  const handleClick = (option) => {
    setSelectedOption(option);
    console.log(`You selected: ${option}`);
  };

  const handleRandomizeClick = () => {
    setAttributes({
      intelligence: Math.floor(Math.random() * 20) + 1,
      strength: Math.floor(Math.random() * 20) + 1,
      dexterity: Math.floor(Math.random() * 20) + 1,
      constitution: Math.floor(Math.random() * 20) + 1,
      wisdom: Math.floor(Math.random() * 20) + 1,
      charisma: Math.floor(Math.random() * 20) + 1,
      randomized: true,
    });
  };

  const myCharacter = {
    name: characterName,
    class: selectedClass,
    race: selectedRace,
    attributes: attributes,
    pets: [
      { name: "Dove", type: "cat" },
      { name: "Hawk", type: "bird" },
      { name: "Owl", type: "owl" },
    ],
  };

  const handleSaveCharacter = () => {
    localStorage.setItem("character", JSON.stringify(myCharacter));
    window.location.href = "/play"; // Redirect to gameplay page
  };

  return (
    <div className="font-syneMono flex flex-col items-center min-h-screen bg-gray-900 text-white py-16">
      <ZibbTitle />
      <CharacterSummary character={myCharacter} />
      <div className="py-4">
        <CharacterInputBox
          label="Character Name"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
      </div>
      <p className="text-xl mb-6 py-3">Choose a race:</p>
      <div className="flex flex-wrap justify-center space-x-4">
        {[
          "Human",
          "Elf",
          "Dragonborn",
          "Tiefling",
          "Dwarf",
          "Halfling",
          "Gnome",
          "Half-Elf",
          "Half-Orc",
        ].map((race) => (
          <button
            key={race}
            className="bg-purple-500 text-white py-2 px-6 my-2 rounded hover:bg-purple-700"
            onClick={() => setSelectedRace(race)}
          >
            {race}
          </button>
        ))}
      </div>

      {selectedRace && (
        <p className="mt-8 text-xl py-3">
          You selected: <span className="text-purple-400">{selectedRace}</span>
        </p>
      )}

<p className="text-xl mb-6 py-5">Choose a class:</p>
      <div className="flex flex-wrap justify-center space-x-4">
        {[
          "Barbarian",
          "Bard",
          "Cleric",
          "Druid",
          "Fighter",
          "Monk",
          "Paladin",
          "Ranger",
          "Rogue",
          "Sorcerer",
          "Warlock",
          "Wizard",
        ].map((characterClass) => (
          <button
            key={characterClass}
            className="bg-violet-500 text-white py-2 px-6 my-2 rounded hover:bg-violet-700"
            onClick={() => setSelectedClass(characterClass)}
          >
            {characterClass}
          </button>
        ))}
      </div>

      {selectedClass && (
        <p className="mt-8 text-xl">
          You selected: <span className="text-purple-400">{selectedClass}</span>
        </p>
      )}

      <div className="py-6">
        <button
          className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-700"
          onClick={handleRandomizeClick}
        >
          Randomize Attributes
        </button>
      </div>
      <div>
        {attributes.randomized && (
          <p className="mt-8 text-xl">Attributes have been randomized.</p>
        )}
      </div>
      <div className="bg-blue-500 text-white py-2 px-6 my-4 rounded hover:bg-blue-700">
        <Link href={`/npcs`}>
            NPC index
        </Link>
      </div>
      <button
    className="bg-sky-500 text-white py-2 px-6 my-4 rounded hover:bg-teal-700"
    onClick={handleSaveCharacter}
>
    Save Character and Start Game
</button>

    </div>
  );
}




