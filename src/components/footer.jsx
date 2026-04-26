const FooterSection = () => {
    return (
        <div className="bg-[#19183B] text-[#E7F2EF] font-satoshi">
            
            {/* TOP SECTION: Newsletter */}
            {/* Added px-4 for mobile padding, flex-col for mobile stacking, gap-8 for spacing */}
            <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-20 flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
                
                <div className="lg:w-[45%]">
                    <h3 className="text-[18px] lg:text-[20px] leading-relaxed">
                        Subscribe to receive updates on new arrivals, exclusive releases, and olfactory insights.
                    </h3>
                </div>

                <div className="flex flex-col w-full lg:w-[50%] gap-4">
                    <h3 className="text-[16px] lg:text-[18px] font-medium">Join the SCENT ATELIER Community</h3>
                    
                    {/* Input & Button Container: Stack on mobile, row on tablet/desktop */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            className="bg-white w-full lg:w-90 h-12 lg:h-10 text-[#19183B] px-4 outline-none placeholder:text-[#19183B]/60" 
                            placeholder="Email Address"  
                        />
                        <button className="p-2 border-2 border-[#E7F2EF] w-full sm:w-40 lg:w-60 h-12 lg:h-10 text-sm uppercase hover:bg-[#E7F2EF] hover:text-[#19183B] transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                    
                    <p className="text-sm opacity-80">
                        By subscribing you agree to the <span className="underline cursor-pointer hover:text-white">Terms of Use</span> & <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>
                    </p>
                </div>
            </div>

            {/* MIDDLE SECTION: Links */}
            {/* Added gap-10 for mobile stacking, grid for better desktop alignment */}
            <div className="container mx-auto px-4 lg:px-8 py-10 flex flex-col md:flex-row justify-between gap-10 lg:gap-20 border-t border-[#E7F2EF]/20">
                
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase font-bold tracking-wider">Get Connected</h1>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="" className="hover:opacity-100 transition-opacity">Facebook</a></li>
                        <li><a href="" className="hover:opacity-100 transition-opacity">Instagram</a></li>
                        <li><a href="" className="hover:opacity-100 transition-opacity">Youtube</a></li>
                        <li><a href="" className="hover:opacity-100 transition-opacity">Tiktok</a></li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase font-bold tracking-wider">Quick Links</h1>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="" className="hover:opacity-100 transition-opacity">About Us</a></li>
                        <li><a href="" className="hover:opacity-100 transition-opacity">Log In / Register</a></li>
                        <li><a href="" className="hover:opacity-100 transition-opacity">My Orders</a></li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase font-bold tracking-wider">Contact Info</h1>
                    <ul className="space-y-2 opacity-80">
                        <li>Email: example@email.com</li>
                        <li>Call Us: 012345678901</li>
                    </ul>
                </div>
                
            </div>

            {/* BOTTOM SECTION: Copyright */}
            <div className="container mx-auto px-4 lg:px-8 pb-8 pt-4">
                <p className="uppercase text-[12px] lg:text-[14px] text-center md:text-left opacity-60 tracking-widest">
                    © {new Date().getFullYear()} SCENT ATELIER
                </p>
            </div>
            
        </div>
    );
};

export default FooterSection;