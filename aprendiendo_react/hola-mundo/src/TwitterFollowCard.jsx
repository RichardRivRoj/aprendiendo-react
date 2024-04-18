import { useState } from "react"

export function TwitterFollowCard ( {  children, userName = 'unknown' } ) {

    //console.log(isFollowing)
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'ml-4 border-none rounded-[999px] p-[6px] pl-4 pr-4 font-bold bg-white text-black cursor-pointer hover:bg-red-600 hover:bg-opacity-10 hover:border-2 hover:text-red-700 hover:transition-colors bg-transparent border-2 text-white w-[120px]' : 'ml-4 border-none rounded-[999px] p-[6px] pl-4 pr-4 font-bold bg-white text-black cursor-pointer hover:bg-[#09f] hover:transition-colors hover:opacity-80'
  
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className="flex text-[#fff] items-center font-[500] justify-between ">
            <header className="flex items-center gap-1">
                <img className="w-12 h-12 rounded-full" src={`https://unavatar.io/${userName}`} alt="User" />

                <div className="flex flex-col">
                    <strong>{children}</strong>
                    <span className="opacity-60">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                    <span className="hidden hover:block">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}