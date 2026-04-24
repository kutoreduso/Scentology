

const BenefitSection = () => {
    return(
        <>
            <div className="lg:mt-25 container mx-auto p-5 space-y-5">
                <div className="mx-auto text-center font-satoshi space-y-1.5">
                    <h3 className="lg:text-2xl font-thin text-[15px]">Your New Collection, Delivered with Care.</h3>
                    <h1 className="lg:text-4xl font-thin text-2xl">FROM OUR STORE TO YOUR DOOR</h1>
                </div>
                <div className="lg:flex-row flex lg:mt-15 flex-col">
                    <div className="w-fit font-satoshi lg:space-y-5 ">
                        <h1 className="font-normal  lg:text-[30px]">Free Shipping</h1>
                        <p className="lg:w-80 text-justify lg:text-[20px] mb-5">Enjoy complimentary standard shipping on all orders over ₱1,500. For your convenience, local boutique pickup is also available.</p>
                        <a 
  href="" 
  // 1. Added group, relative, and overflow-hidden to the parent
  // 2. Added inline-block so the border and padding behave perfectly
  // 3. Added transition-colors so the text smoothly turns [#E7F2EF]
  className="group relative overflow-hidden inline-block border border-black uppercase p-2 font-thin text-black hover:text-[#E7F2EF] transition-colors duration-500"
>
  {/* The Paint (Sweeping Background) */}
  <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
  
  {/* The Text (Must be wrapped in a span with z-10 to stay on top!) */}
  <span className="relative z-10 text-[15px]">
    LEARN MORE ABOUT PAYMENT METHODS
  </span>
</a>
                    </div>
                    <div className="w-fit font-satoshi lg:space-y-5 mx-auto">
                        <h1 className="font-normal lg:text-[30px]">Fast Fulfilment</h1>
                        <p className="lg:w-80 text-justify lg:text-[20px] mb-5">No need to wait for that new scent! We offer same-day delivery via Lalamove so you can start smelling great in just a few hours.</p>
                        <a 
  href="" 
  // 1. Added group, relative, and overflow-hidden to the parent
  // 2. Added inline-block so the border and padding behave perfectly
  // 3. Added transition-colors so the text smoothly turns [#E7F2EF]
  className="group relative overflow-hidden inline-block border border-black uppercase p-2 font-thin text-black hover:text-[#E7F2EF] transition-colors duration-500"
>
  {/* The Paint (Sweeping Background) */}
  <div className="absolute inset-0 bg-[#19183B] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
  
  {/* The Text (Must be wrapped in a span with z-10 to stay on top!) */}
  <span className="relative z-10 text-[15px]">
    LEARN MORE ABOUT PAYMENT METHODS
  </span>
</a>
                    </div>
                    <div className="w-fit font-satoshi lg:space-y-5 ">
                        <h1 className="font-normal  lg:text-[30px]">Secure Payment</h1>
                        <p className="lg:w-80 text-justify lg:text-[20px] mb-5">Shop with confidence. Our encrypted checkout supports all major credit cards, digital wallets, and flexible payment terms.</p>
                        <a 
  href="" 
  // 1. Added group, relative, and overflow-hidden to the parent
  // 2. Added inline-block so the border and padding behave perfectly
  // 3. Added transition-colors so the text smoothly turns [#E7F2EF]
  className="group relative overflow-hidden inline-block border border-[#19183B] uppercase p-2 font-thin text-[#19183B] hover:text-[#E7F2EF] transition-colors duration-500"
>
  {/* The Paint (Sweeping Background) */}
  <div className="absolute inset-0 bg-[#19183B] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
  
  {/* The Text (Must be wrapped in a span with z-10 to stay on top!) */}
  <span className="relative z-10 text-[15px]">
    LEARN MORE ABOUT PAYMENT METHODS
  </span>
</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitSection