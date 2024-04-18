import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {

    //const formatUserName = (userName) => `@${userName}`

    //const formattedUserName = <span>@{userName}</span>
    
    return (
        <>
            <section className="flex flex-col gap-2">
                <TwitterFollowCard
                isFollowing={true} 
                userName="midudev">
                    Richard Rivera
                </TwitterFollowCard>
                
                <TwitterFollowCard 
                isFollowing={false} 
                userName="pheralb">
                    Peralti Gomez
                </TwitterFollowCard>
                
                <TwitterFollowCard 
                isFollowing 
                userName="vxnder">
                    Jose Rojas
                </TwitterFollowCard>
            </section>
        </>
    )
}