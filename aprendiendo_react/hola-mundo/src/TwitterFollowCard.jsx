export function TwitterFollowCard ( {  children, userName = 'unknown', name, isFollowing } ) {

    //console.log(isFollowing)
    return (
        <article className="flex text-[#fff] items-center font-[500] justify-between">
            <header className="flex items-center gap-1">
                <img className="w-12 h-12 rounded-full" src={`https://unavatar.io/${userName}`} alt="User" />

                <div className="flex flex-col">
                    <strong>{children}</strong>
                    <span className="opacity-60">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="ml-4 border-none rounded-[999px] p-[6px] pl-4 pr-4 font-bold bg-white text-black cursor-pointer hover:bg-[#09f] hover:transition-colors">
                    Seguir 
                </button>
            </aside>
        </article>
    )
}