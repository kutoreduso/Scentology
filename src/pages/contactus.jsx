

const ContactSection = () => {

    return (
        <>
        
            <div className="">
                {/* Hero Banner - Responsive height */}
                <div className="w-full h-[50dvh] md:h-[60dvh] lg:h-[80dvh]">
                    <img 
                        src="/img/adg.avif"
                        alt="ADG"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="container mx-auto font-satoshi">
                <h1 className="lg:text-6xl text-center mt-10 uppercase text-[#19183B]">Contact Us</h1>
            </div>
            <div className="container mx-auto font-satoshi mt-10 lg:mt-20 p-4 lg:p-8 flex justify-center">
    {/* Main Container Card */}
    <div className="flex flex-col lg:flex-row w-full max-w-[1100px] bg-white rounded-sm overflow-hidden shadow-md border-[#E7F2EF]">
        {/* Left Side: Image */}
        {/* Adjusted mobile height to be larger (h-[400px]) and kept it centered */}
        <div className="w-[90%] mx-auto mt-6 h-[400px] lg:m-0 lg:w-5/12 lg:h-[70dvh]">
            <img 
                src="/img/jpg.jpg"
                alt="Perfume Bottles"
                /* Added object-center to ensure it crops to the middle of the picture */
                className="object-cover object-center w-full h-full rounded-sm lg:rounded-none"
            />
        </div>

        {/* Right Side: Form Area */}
        <div className="w-full lg:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
            
            {/* Heading */}
            <h1 className="font-satoshi text-3xl lg:text-4xl text-center mb-10 text-[#19183B]">
                Get in Touch
            </h1>

            {/* Form */}
            <form className="flex flex-col gap-6">
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-[#19183B]">Name</label>
                        <input 
                            type="text" 
                            className="border border-gray-500 bg-transparent py-2 px-3 outline-none focus:border-gray-800 transition-colors"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-[#19183B]">Email</label>
                        <input 
                            type="email" 
                            className="border border-gray-500 bg-transparent py-2 px-3 outline-none focus:border-gray-800 transition-colors"
                        />
                    </div>
                </div>

                {/* Phone Row */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-[#19183B]">Phone</label>
                    <input 
                        type="tel" 
                        className="border border-gray-500 bg-transparent py-2 px-3 outline-none focus:border-gray-800 transition-colors w-full"
                    />
                </div>

                {/* Message Row */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-[#19183B]">Your message</label>
                    <textarea 
                        rows="5"
                        className="border border-gray-500 bg-transparent py-2 px-3 outline-none focus:border-gray-800 transition-colors w-full resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                    <button 
                        type="submit" 
                        className="bg-[#19183B] uppercase hover:bg-[#2a2a4d] text-white py-3 px-10 rounded-sm transition-colors duration-300"
                    >
                        Submit Now
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
        </>
    )
}

export default ContactSection