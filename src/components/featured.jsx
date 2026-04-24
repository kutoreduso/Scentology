import { useState, useEffect } from "react";

const featuredBrands = [
{
        id: 1,
        brand: "Valentino",
        collection: "Born In Roma",
        image: "/img/valentino1.png",
        link: "#"
    },
{

        id: 2,
        brand: "Acqua Di Gio",
        collection:"Explore the gentleman Smell on the collection",
        image :"/img/adg.avif",
        link:"#",
},
{
        id: 3,
        brand:"",
        



}


]
// 1. Create a state to track which slide is currently visible
    

const FeaturedSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // 2. Use useEffect to run a timer that changes the slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % featuredBrands.length);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Cleanup the interval if the user leaves the page
        return () => clearInterval(interval);
    }, []);
    return(
        <>
            {/* Title Section */}
            <div className="container mx-auto lg:mt-15 mb-6 lg:mb-10 space-y-5">
                <h1 className="text-center font-thin uppercase lg:text-4xl text-2xl">Featured Brand</h1>
            </div>

            {/* THE CAROUSEL CONTAINER */}
            {/* Removed flex and scroll-snapping. Added relative to hold the absolute slides. */}
            <div className="relative w-full h-[100dvh] lg:h-150 overflow-hidden bg-[#19183B]">
                
                {featuredBrands.map((item, index) => (
                    
                    <div 
                        key={item.id} 
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        
                        {/* Background Image */}
                        <img 
                            src={item.image}
                            alt={item.brand}
                            className="absolute inset-0 object-cover w-full h-full"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

                        {/* Text Content */}
                        <div className="absolute bottom-12 left-6 lg:bottom-24 lg:left-24 flex flex-col items-start text-[#E7F2EF] font-satoshi z-10">
                            
                            <h2 className="text-3xl lg:text-5xl font-thin uppercase tracking-widest mb-2">
                                {item.brand}
                            </h2>
                            
                            <p className="text-sm lg:text-base tracking-[0.2em] uppercase mb-8 opacity-80">
                                {item.collection}
                            </p>
                            
                            <a href={item.link} className="px-8 py-3 border border-[#E7F2EF] hover:bg-[#E7F2EF] hover:text-[#19183B] uppercase text-sm font-medium tracking-wider transition-all duration-300">
                                View Collection
                            </a>

                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}

export default FeaturedSection;