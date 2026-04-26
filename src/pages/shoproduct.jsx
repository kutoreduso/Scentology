import ProductCard from "../assets/product"
import { useState } from "react"

const ShopProduct = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMEOpen, setIsMeOpen] = useState(false)

    return (
        <>
            {/* Dimming overlay that closes the filter when clicked */}
            <div 
                onClick={() => setIsOpen(false)} 
                className={`fixed inset-0 bg-black/50 z-[9990] transition-opacity duration-300 ease-out ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            />

            {/* Filter Panel - Sliding from the LEFT with content removed */}
            <div className={`fixed top-0 left-0 h-screen lg:w-100 bg-[#E7F2EF] z-[9999] shadow-xl transform transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="lg:p-5 flex flex-col w-full font-satoshi">
    {/* Row for Title and Toggle Button */}
    <div className="flex justify-between items-center w-full">
        <h1 className="font-satoshi lg:text-2xl">Filter</h1>
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="font-satoshi"
        >
            {isOpen ? "Close" : "Filter"}
        </button>
    </div>

    {/* <div 
    onClick={() => setIsMeOpen(false)}
    className={`fixed inset-0 bg-black/50 z-[9990] transition-opacity duration-300 ease-out ${
        isMEOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
    }`}
    />

    <div className={`fixed top-0 left-0 h-screen lg:w-100 bg-[#E7F2EF] z-[9999] shadow-xl transform transition-transform duration-300 ease-out ${
        isMEOpen ? "translate-x-0" : "-translate-x-full"
    }`}></div> */}

    {/* Column for Categories */}
    <div className="flex flex-col mt-4 font-satoshi lg:text-[20px]">
        <button 
        onClick={()=> setIsMeOpen(true)}
        className="text-left">
            Middle Eastern
        </button>
    </div>
    <div 
    className="flex flex-col mt-4 font-satoshi lg:text-[20px]">
        Designer Fragrances
    </div>
</div>
</div>
            {/* Main content wrapper that gets blurred */}
            <div className={`z-[1] transition-all duration-300 ease-out ${isOpen ? "blur-md" : "blur-0"}`}>
                <div className="w-full h-[100dvh] lg:h-[80dvh]">
                    <div className="w-full h-full">
                        <img 
                            src="/img/adg.avif"
                            alt="ADG"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="mt-20 lg:mt-40 container mx-auto px-4 pb-20">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:p-1 lg:pl-2 lg:pr-2 rounded-sm inline-block"
                    >
                        Filter
                    </button> 

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-x-3 gap-y-8">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopProduct