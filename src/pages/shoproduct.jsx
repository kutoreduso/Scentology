

import ProductCard from "../assets/product"
import { useState } from "react"

const ShopProduct = () => {
    // 1. ADD THIS STATE (It was missing)
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMeOpen, setIsMeOpen] = useState(false);

    // 2. UPDATE HANDLER (Using the property brandMe)
    const handleBrandChange = (brandName, isChecked) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, brandName]);
        } else {
            setSelectedBrands(selectedBrands.filter((item) => item !== brandName));
        }
    };

    const meBrand = [
        {id:1, brandMe:"Lattafa"},
        {id:2, brandMe:"Armaf"},
        {id:3, brandMe:"Afnan"},
        {id:4, brandMe:"Khadlaj"},
        {id:5, brandMe:"Rayhaan"}
    ]

    return (
        <>
            {/* Overlay ... unchanged */}
            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black/50 z-[9990] transition-opacity duration-300 ease-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} />

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen lg:w-80 bg-[#E7F2EF] z-[9999] shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="lg:p-5 flex flex-col w-full font-satoshi">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="font-satoshi lg:text-2xl">Filter</h1>
                        <button onClick={() => setIsOpen(false)} className="font-satoshi">Close</button>
                    </div>

                    <div className="flex flex-col mt-4 font-satoshi lg:text-[20px]">
                        <button onClick={() => setIsMeOpen(!isMeOpen)} className="text-left w-full">
                            Middle Eastern
                        </button>

                        {isMeOpen && (
                            <div className="flex flex-col pl-4 mt-4 space-y-4">
                                {meBrand.map((item) => (
                                    // 3. USE item.id FOR KEY AND item.brandMe FOR TEXT
                                    <label key={item.id} className="flex items-center gap-3 cursor-pointer group duration-300 transition-all">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedBrands.includes(item.brandMe)}
                                            onChange={(e) => handleBrandChange(item.brandMe, e.target.checked)}
                                            className="w-4 h-4 accent-black appearance-none border border-black checked:bg-black checked:border-transparent rounded-sm transition-all" 
                                        />
                                        <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity">
                                            {item.brandMe}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
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