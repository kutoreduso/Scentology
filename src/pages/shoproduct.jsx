import ProductCard from "../assets/product"

const ShopProduct = () => {

    return(

        <>
        <div className="w-full h-[100dvh] lg:h-[80dvh]">
            <div className="w-full h-full">
                <img 
                    src="/img/adg.avif"
                    alt="ADG"
                    className="object-cover w-full h-full"
                />
            </div>
           </div>
           <div className="mt-20 lg:mt-40 container mx-auto px-4">

        <button className="border lg:p-1 lg:pl-2 lg:pr-2 rounded-sm">
            Filter
            </button> 
    {/* Use gap-y for vertical spacing and gap-x for horizontal */}
    <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-x-3 gap-y-8">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
</div>
        </>

    )
}

export default ShopProduct