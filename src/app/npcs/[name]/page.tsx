import { ReactNode } from 'react';
import npcs from "../npcs.js";

import Link from "next/link";


export default function Page({ params }: { params: { name: string } }) {
    const npc = npcs.filter(npc => npc.name === params.name)[0];

    if (!npc) {
        return (
            <main>
                <h1>NPC {params.name} not found</h1>
            </main>
        );
    }

    return (
        <main className= "py-10 px-10 my-4 font-syneMono">
            <h1 className= "py-4 font-unifrakturCook text-5xl text-purple-500">{npc.name}</h1>
            <p>{npc.description}</p>
            <p>{npc.race}</p>
            <p>{npc.class}</p>
            <p>{npc.appearance}</p>
            <p>{npc.backstory}</p>
            {npc.imageUrl && (
                <img 
                    src={npc.imageUrl} 
                    alt={`${npc.name}'s image`} 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
            )}
            <div className= "rounded-lg bg-purple-500 text-white px-4 py-2 my-5 w-fit text-center shadow-md hover:bg-purple-600 transition">
                <Link href="/npcs">Back to NPC Index</Link>

            </div>


        </main>
    );
}
