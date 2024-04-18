import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {

    //const formatUserName = (userName) => `@${userName}`

    //const formattedUserName = <span>@{userName}</span>
    
    return (
        <>
            <section className="flex flex-col gap-2">
                <TwitterFollowCard 
                userName="midudev">
                    Richard Rivera
                </TwitterFollowCard>
                
                <TwitterFollowCard 
                userName="pheralb">
                    Peralti Gomez
                </TwitterFollowCard>
                
                <TwitterFollowCard 
                userName="vxnder">
                    Jose Rojas
                </TwitterFollowCard>
            </section>
        </>
    )
}