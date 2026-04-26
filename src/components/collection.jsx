import ShopProduct from "../pages/shoproduct"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import CardsUI, { prdimg } from "../assets/cards"
import { Link } from "react-router-dom"
const CollectionSection = () => {
    return(
        <>
       <div className="container mx-auto text-[#19183B]">
    
    <div className="mx-auto lg:p-10 lg:mt-10 mb-6 lg:mb-0 mt-10">
        <h1 className="uppercase font-satoshi text-center lg:text-4xl font-thin lg:pb-2 text-2xl">New Collection</h1>
        <h3 className="font-satoshi text-center lg:text-2xl font-thin">Find Here Your New Favorites Scent</h3>
    </div>

    {/* NAVIGATION SECTION */}
    {/* Added: lg:overflow-visible, lg:flex-wrap, lg:snap-none to stop desktop drag */}
    <div className="lg:space-x-6 font-satoshi lg:text-[20px] lg:pb-2 flex w-full overflow-x-auto lg:overflow-visible lg:flex-wrap snap-x lg:snap-none gap-4 pb-4 px-4 lg:px-0 whitespace-nowrap scrollbar-hide">
        <a href="" className="underline shrink-0">Peoples Favorites</a>
        <a href="" className="w-fit shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">New Arrival</a>
        <a href="" className="w-fit shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">Top Niche Fragrances</a>
        <a href="" className="w-fit shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">Best Seller</a>
        
        {/* DESKTOP "Shop All": Hidden on mobile (hidden), visible on desktop (lg:block) */}
        <div className="ml-auto hidden lg:block">
    <Link 
    to="/shoproduct" 
    className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 lg:hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300"
>
    Shop All Product
</Link>
</div>
    </div>

    {/* CARDS SECTION */}
    {/* Added: lg:overflow-visible, lg:flex-wrap, lg:snap-none to let cards sit normally on desktop */}
<div className="flex lg:flex-row lg:flex-wrap lg:justify-start overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-4 pb-4 px-4 lg:px-0 scrollbar-hide">
    {prdimg.map((product) => (
        <CardsUI 
            key={product.id}
            prdname={product.prdname}
            priceprd={product.priceprd}
            prdpic={product.prdpic}
            // Pass the second image here
            hoverPic={product.hoverPic} 
        />
    ))}
</div>

    {/* MOBILE "Shop All": Visible on mobile (flex), hidden on desktop (lg:hidden) */}
    <div className="mt-8 flex justify-center lg:hidden font-satoshi text-[20px]">
        <a href="" className="w-fit relative after:absolute after:bottom-0 underline after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#19183B] after:transition-all after:duration-300">Shop All Product</a>
    </div>

</div>
        </>
    )
}

export default CollectionSection