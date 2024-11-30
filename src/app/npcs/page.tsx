import Link from "next/link";
import npcs from "./npcs.js";

interface NPCIndexProps {
    children: ReactNode;
}

const NPCIndex = ({ children }: NPCIndexProps) => {
    return (
        <div className= "py-10 px-10 font-syneMono">
            <h1 className= "text-purple-500 text-5xl my-10 font-unifrakturCook">NPC Index</h1>
            {children}
        </div>
    );
};
export default function Page() {
    return (
        <main className="flex justify-center items-center min-h-screen">
            <NPCIndex>
                <div className="flex flex-col gap-4 items-center">
                    {npcs.map((npc) => (
                        <div key={npc.name} className="rounded-lg bg-violet-500 text-white px-4 py-2 w-fit text-center shadow-md hover:bg-violet-700 transition">
                            <Link href={`/npcs/${npc.name}`}>
                                {npc.name}
                            </Link>
                        </div>
                
                    ))}
                    <div className="rounded-lg bg-indigo-500 text-white px-4 py-2 w-fit text-center shadow-md hover:bg-indigo-700 transition">
                            <Link href={`/`}>
                                Back to Home
                            </Link>
                        </div>
                </div>
            </NPCIndex>
        </main>
    );
}
