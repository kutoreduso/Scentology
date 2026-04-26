import { useState, useEffect } from "react"

const HeaderSection = () => {
    return(
        <>
           <header className="w-full h-[100dvh]">
    <div className="w-full h-full">
        <img 
            src="/img/creed.jpg"
            alt="Hero image"
            className="object-cover w-full h-full"
        />
    </div>
</header>
        </>
    )
}

export default HeaderSection