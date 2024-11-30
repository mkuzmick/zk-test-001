 
  "use client";

import { useState, useEffect } from "react";

export default function Gameplay() {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const savedCharacter = JSON.parse(localStorage.getItem("character"));
        setCharacter(savedCharacter);
    }, []);

    if (!character) {
        return <p className= "font-syneMono">Loading character...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center my-10 px-10 font-syneMono min-h-screen bg-gray-900 text-white p-6">
            <h1 className="font-unifrakturCook text-5xl text-purple-500">Welcome to the Game!</h1>
            <h2 className="font-syneMono mt-4 text-2xl">Character: {character.name}</h2>
            <p>Class: {character.class}</p>
            <p>Race: {character.race}</p>
            <div className="mt-6">
                <button className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-emerald-700">
                    Start Adventure
                </button>
            </div>
        </div>
    );
}
