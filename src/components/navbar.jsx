
import React, { useState } from 'react';

const NavbarSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFragrancesOpen, setIsFragrancesOpen] = useState(false);

    return (
        <nav className="text-[#19183B] sticky top-0 bg-[#E7F2EF] z-99">

            <div className="lg:p-8 p-4">
                <div className="grid grid-cols-3 items-center font-satoshi">
                    
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden block font-satoshi font-medium uppercase tracking-wider text-sm focus:outline-none justify-self-start"
                    >
                        Menu
                    </button>

                    <h1 className="font-satoshi uppercase font-bold justify-self-center lg:justify-self-start lg:-order-1">
                        SCENT ATELIER
                    </h1>
                    
                    <div className="hidden lg:flex justify-center relative lg:space-x-6">
                        <div className="group inline-block">
                            <a href="" className="font-medium">Fragrances</a>
                        
                            <div className="lg:pb-20 absolute w-screen left-1/2 -translate-x-1/2 bg-[#E7F2EF] top-full z-50 opacity-0 invisible translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                                <div className="container mx-auto lg:mt-10 flex lg:flex-row lg:space-x-6 lg:gap-6">
                                    <div className="font-satoshi space-y-3 flex lg:flex-col">
                                        <a href="#" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 lg:text-3xl font-medium">Peoples Favorites</a>
                                        <a href="#" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 lg:text-3xl font-medium">New Arrival</a>
                                        <a href="#" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 lg:text-3xl font-medium">Top Niche Fragrances</a>
                                        <a href="#" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 lg:text-3xl font-medium">Best Seller</a>
                                    </div>
                                    <div className="flex lg:flex-col lg:space-y-1.5">
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[20px]">Curated Collections</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Middle Eastern Exclusives</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Designer Exclusives</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Shop All</a>
                                    </div>
                                    <div className="flex lg:flex-col lg:space-y-1.5">
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[20px]">Genders</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">For Male</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">For Female</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">For All</a>
                                    </div>
                                    <div className="flex lg:flex-col lg:space-y-1.5">
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[20px]">Scents Profiles</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Loud & Sexy</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Date Night Intimate</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Daily Signature</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Aquatic Signature</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Light Signature</a>
                                    </div>
                                    <div className="flex lg:flex-col lg:space-y-1.5">
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[20px]">Scents Notes</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Oud & Woody</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Warm Spicy</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Spicy & Boozy</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Fresh Citrus</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px] ">Leather & Powdery</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px]">Vanilla Bubblegum</a>
                                        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300 font-satoshi font-medium lg:text-[18px] ">Sweet & Creamy</a>
                                    </div>
                                </div>
                            </div>
                            {/* --- END EXACT DESKTOP MEGA MENU --- */}
                            
                        </div>
                        <a href="" className="font-medium">About</a>
                        <a href="" className="font-medium">Contact Us</a>
                    </div>
                    
                    <div className="flex justify-end space-x-6 justify-self-end">
                        <a href="">Icon</a>
                        <a href="">Icon</a>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden fixed inset-0 z-[100] w-full h-[100dvh] bg-[#E7F2EF] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-4 border-b border-[#19183B]/10">
                    <h1 className="font-satoshi uppercase font-bold text-xl tracking-wider text-[#19183B]">SCENT ATELIER</h1>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="font-satoshi font-medium uppercase tracking-wider text-sm focus:outline-none text-[#19183B]">
                        Close
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-6 font-satoshi">
                    
                    {/* Fragrances Dropdown */}
                    <div className="flex flex-col">
                        <button 
                            onClick={() => setIsFragrancesOpen(!isFragrancesOpen)}
                            className="text-2xl font-medium text-left flex justify-between items-center text-[#19183B]"
                        >
                            Fragrances
                            <span className="text-3xl leading-none font-light">{isFragrancesOpen ? '-' : '+'}</span>
                        </button>

                        <div className={`transition-all duration-300 overflow-hidden ${isFragrancesOpen ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="pl-4 border-l-2 border-[#19183B]/20 flex flex-col space-y-8">
                                
                                <div className="flex flex-col space-y-3">
                                    <a href="#" className="text-xl font-medium text-[#19183B]">Peoples Favorites</a>
                                    <a href="#" className="text-xl font-medium text-[#19183B]">New Arrival</a>
                                    <a href="#" className="text-xl font-medium text-[#19183B]">Top Niche Fragrances</a>
                                    <a href="#" className="text-xl font-medium text-[#19183B]">Best Seller</a>
                                </div>
                                
                                <div className="flex flex-col space-y-3">
                                    <span className="text-lg font-bold text-[#19183B]/50 uppercase tracking-wider">Curated</span>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Middle Eastern Exclusives</a>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Designer Exclusives</a>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Shop All</a>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <span className="text-lg font-bold text-[#19183B]/50 uppercase tracking-wider">Profiles</span>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Loud & Sexy</a>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Date Night Intimate</a>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Daily Signature</a>
                                </div>
                                
                                <div className="flex flex-col space-y-3">
                                    <span className="text-lg font-bold text-[#19183B]/50 uppercase tracking-wider">Notes</span>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Oud & Woody</a>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Warm Spicy</a>
                                    <a href="#" className="text-lg font-medium text-[#19183B]">Fresh Citrus</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <a href="" className="text-2xl font-medium text-[#19183B]">About</a>
                    <a href="" className="text-2xl font-medium text-[#19183B]">Contact Us</a>
                </div>
            </div>

        </nav>
    );
}
export default NavbarSection