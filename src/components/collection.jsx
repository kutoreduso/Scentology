import CardsUI from "../assets/cards"

const CollectionSection = () => {
    return(
        <>
        <div className="container mx-auto text-[#19183B]">
            <div className="mx-auto lg:p-10 lg:mt-10">
                    <h1 className="uppercase font-satoshi text-center lg:text-6xl font-thin lg:pb-2">New Collection</h1>
                    <h3 className="font-satoshi text-center lg:text-2xl font-thin">Find Here Your New Favorites Scent</h3>
            </div>
           <div className="lg:space-x-6 font-satoshi lg:text-[20px] lg:pb-2 flex w-full">
    <a href="" className="underline ">Peoples Favorites</a>
    <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">New Arrival</a>
    <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">Top Niche Fragrances</a>
    <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">Best Seller</a>
    
    {/* CHANGED LINE: Added ml-auto to push this entire block to the right */}
    <div className="ml-auto">
        <a href="" className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">Shop All Product</a>
    </div>
</div>
            <div className="space-x-5 flex lg:flex-row">
                <CardsUI/>
                <CardsUI/>
                <CardsUI/>
                <CardsUI/>
                <CardsUI/>
                <CardsUI/>
            </div>
        </div>
        </>
    )
}

export default CollectionSection