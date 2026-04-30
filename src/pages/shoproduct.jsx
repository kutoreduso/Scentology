import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Productsection, { CardsProduct } from "../assets/product";

const ShopProduct = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMeOpen, setIsMeOpen] = useState(false);
    const [isDesignerOpen, setDesignerOpen] = useState(false);
    
    // --- NEW PAGINATION STATE ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18; // 3 rows of 6 (or customize this number)

    const handleBrandChange = (brandName, isChecked) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, brandName]);
        } else {
            setSelectedBrands(selectedBrands.filter((item) => item !== brandName));
        }
        setCurrentPage(1); // Reset to page 1 when filtering
    };

    const filteredProducts = CardsProduct.filter((product) => {
        if (selectedBrands.length === 0) return true;
        return selectedBrands.includes(product.brandcall);
    });

    // --- PAGINATION CALCULATIONS ---
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const meBrand = [
        {id:1, brandMe:"Lattafa"}, {id:2, brandMe:"Armaf"},
        {id:3, brandMe:"Afnan"}, {id:4, brandMe:"Rasasi"}, {id:5, brandMe:"Rayhaan"}
    ];
    
    const DesignerBrand = [
        {id:1, brandDesigner:"Jean Paul Gaultier"}, {id:2, brandDesigner:"Yves Saint Laurent"},
        {id:3, brandDesigner:"Valentino"}, {id:4, brandDesigner:"Dolce & Gabbana"}, {id:5, brandDesigner:"Emporio Armani"}
    ];

    const dropdownVariants = {
        hidden: { height: 0, opacity: 0, marginTop: 0 },
        visible: { 
            height: "auto", 
            opacity: 1, 
            marginTop: 16, 
            transition: { height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.2, delay: 0.1 } } 
        },
        exit: { 
            height: 0, 
            opacity: 0, 
            marginTop: 0,
            transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } } 
        }
    };

    return (
        <>
            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black/50 z-[9990] transition-opacity duration-300 ease-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} />

            <div className={`fixed top-0 left-0 h-screen w-[85%] md:w-80 bg-white z-[9999] shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-5 flex flex-col w-full font-satoshi">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-2xl">Filter</h1>
                        <button onClick={() => setIsOpen(false)} className="uppercase text-sm tracking-widest">Close</button>
                    </div>

                    <div className="flex flex-col mt-8 font-satoshi text-[18px]">
                        <button onClick={() => setIsMeOpen(!isMeOpen)} className="text-left w-full flex justify-between items-center border-b border-black/10 pb-2">
                            Middle Eastern
                            <motion.span animate={{ rotate: isMeOpen ? 180 : 0 }}>{isMeOpen ? "-" : "+"}</motion.span>
                        </button>
                        <AnimatePresence>
                            {isMeOpen && (
                                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col pl-2 space-y-4 overflow-hidden">
                                    {meBrand.map((item) => (
                                        <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" checked={selectedBrands.includes(item.brandMe)} onChange={(e) => handleBrandChange(item.brandMe, e.target.checked)} className="w-4 h-4 accent-black" />
                                            <span className="text-base opacity-70 group-hover:opacity-100 transition-all duration-300">{item.brandMe}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col mt-8 font-satoshi text-[18px]">
                        <button onClick={() => setDesignerOpen(!isDesignerOpen)} className="text-left w-full flex justify-between items-center border-b border-black/10 pb-2">
                            Designer Fragrances
                            <motion.span animate={{ rotate: isDesignerOpen ? 180 : 0 }}>{isDesignerOpen ? "-" : "+"}</motion.span>
                        </button>
                        <AnimatePresence>
                            {isDesignerOpen && (
                                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col pl-2 space-y-4 overflow-hidden">
                                    {DesignerBrand.map((Designeritem) => (
                                        <label key={Designeritem.id} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" checked={selectedBrands.includes(Designeritem.brandDesigner)} onChange={(i) => handleBrandChange(Designeritem.brandDesigner, i.target.checked)} className="w-4 h-4 accent-black" />
                                            <span className="text-base opacity-70 group-hover:opacity-100 transition-all duration-300">{Designeritem.brandDesigner}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${isOpen ? "blur-md scale-[0.98]" : "blur-0 scale-100"}`}>
                <div className="w-full h-[50dvh] md:h-[60dvh] lg:h-[80dvh]">
                    <img src="/img/adg.avif" alt="ADG" className="object-cover w-full h-full" />
                </div>

                <div className="mt-10 lg:mt-20 container mx-auto px-4 pb-20">
                    <button onClick={() => setIsOpen(!isOpen)} className="border border-[#19183B] px-6 py-2 uppercase text-xs tracking-widest hover:bg-[#19183B] hover:text-white transition-all">
                        Filter {selectedBrands.length > 0 && `(${selectedBrands.length})`}
                    </button> 

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-10 gap-x-4 gap-y-10 mix-blend-multiply bg-transparent">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((productbrand)=> (
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

                    {/* --- PAGINATION BUTTONS --- */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-20 gap-4 font-satoshi">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => {
                                        setCurrentPage(i + 1);
                                        window.scrollTo({ top: 500, behavior: 'smooth' }); // Scrolls back to products
                                    }}
                                    className={`text-sm px-4 py-2 transition-all duration-300 ${
                                        currentPage === i + 1 
                                        ? "border-b border-black text-black font-bold" 
                                        : "text-black/30 hover:text-black"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ShopProduct;