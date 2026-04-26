import { useState } from "react"
import Productsection, { CardsProduct } from "../assets/product";

const ShopProduct = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMeOpen, setIsMeOpen] = useState(false);

    const handleBrandChange = (brandName, isChecked) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, brandName]);
        } else {
            setSelectedBrands(selectedBrands.filter((item) => item !== brandName));
        }
    };

    // FILTERING SYSTEM: Filter based on the 'brandcall' property in your array
    const filteredProducts = CardsProduct.filter((product) => {
        if (selectedBrands.length === 0) return true;
        return selectedBrands.includes(product.brandcall);
    });

    const meBrand = [
        {id:1, brandMe:"Lattafa"},
        {id:2, brandMe:"Armaf"},
        {id:3, brandMe:"Afnan"},
        {id:4, brandMe:"Khadlaj"},
        {id:5, brandMe:"Rayhaan"}
    ]

    return (
        <>
            {/* Overlay */}
            <div 
                onClick={() => setIsOpen(false)} 
                className={`fixed inset-0 bg-black/50 z-[9990] transition-opacity duration-300 ease-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} 
            />

            {/* Sidebar - Fixed Mobile Viewport (w-[85%]) */}
            <div className={`fixed top-0 left-0 h-screen w-[85%] md:w-80 bg-white z-[9999] shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-5 flex flex-col w-full font-satoshi">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-2xl">Filter</h1>
                        <button onClick={() => setIsOpen(false)} className="uppercase text-sm tracking-widest">Close</button>
                    </div>

                    <div className="flex flex-col mt-8 font-satoshi text-[18px]">
                        <button 
                            onClick={() => setIsMeOpen(!isMeOpen)} 
                            className="text-left w-full flex justify-between items-center border-b border-black/10 pb-2"
                        >
                            Middle Eastern
                            <span>{isMeOpen ? "-" : "+"}</span>
                        </button>

                        {isMeOpen && (
                            <div className="flex flex-col pl-2 mt-4 space-y-4">
                                {meBrand.map((item) => (
                                    <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedBrands.includes(item.brandMe)}
                                            onChange={(e) => handleBrandChange(item.brandMe, e.target.checked)}
                                            className="w-4 h-4 accent-black" 
                                        />
                                        <span className="text-base opacity-70 group-hover:opacity-100 transition-all">
                                            {item.brandMe}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? "blur-md scale-[0.98]" : "blur-0 scale-100"}`}>
                {/* Hero Banner - Responsive height */}
                <div className="w-full h-[50dvh] md:h-[60dvh] lg:h-[80dvh]">
                    <img 
                        src="/img/adg.avif"
                        alt="ADG"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="mt-10 lg:mt-20 container mx-auto px-4 pb-20">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="border border-[#19183B] px-6 py-2 uppercase text-xs tracking-widest hover:bg-[#19183B] hover:text-white transition-all"
                    >
                        Filter {selectedBrands.length > 0 && `(${selectedBrands.length})`}
                    </button> 

                    {/* Responsive Grid System */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-10 gap-x-4 gap-y-10 mix-blend-multiply bg-transparent">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((productbrand)=> (
                                <Productsection 
                                    key={productbrand.brandid}
                                    brandname={productbrand.brandname}
                                    brandprice={productbrand.brandprice}
                                    brandpic={productbrand.brandpic}
                                    hoverbrand={productbrand.hoverbrand}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center opacity-50 font-satoshi italic">
                                No fragrances found matching your selection.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopProduct