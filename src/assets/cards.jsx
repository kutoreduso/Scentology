

export const prdimg = [
    {id: 1, prdname:"Afnan 9pm", priceprd:"P1800", prdpic:"./prd/9pm.png", hoverPic:"/prd/9pm1.png" },
    {id: 2, prdname:"Lattafa Asad", priceprd:"P1400", prdpic:"./prd/asad.png", hoverPic:"/prd/asad1.png" },
    {id: 3, prdname:"Stronger With You Intensly", priceprd:"P6400", prdpic:"./prd/swyi.png",hoverPic:"/prd/swyi1.png" },
    {id: 4, prdname:"Scandal Pour Homme Le Parfum", priceprd:"P6000", prdpic:"./prd/pour-homme.png", hoverPic:"/prd/pour-homme1.png" },
    {id: 5, prdname:"Hugo Boss Absolu Elixir", priceprd:"P4500", prdpic:"./prd/hugo-boss.png",hoverPic:"/prd/hugo-boss1.png"},
    {id: 6, prdname:"Dolce & Gabbana The One EDP", priceprd:"P4500", prdpic:"./prd/the-one.png",hoverPic: "/prd/the-one1.png"},



]

const CardsUI = ({prdname, priceprd,prdpic,hoverPic}) => {
    return(
        <>
            <div className="group flex-none snap-center lg:w-60 w-60 cursor-pointer">
    {/* Image Container */}
    <div className="relative overflow-hidden border border-[#A1C2BD] aspect-square">
        {/* Primary Image (Default) */}
        <img 
            src={prdpic} 
            alt={prdname}
            className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Secondary Image (Visible on Hover) */}
        <img 
            src={hoverPic} // Add your hover image variable here
            alt={`${prdname} detail`}
           className="absolute inset-0 object-cover w-full h-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-90"
        />
    </div>

    {/* Text Content */}
    <div className="mt-2 space-y-1">
        <h1 className="font-medium text-sm">{prdname}</h1>
        <h1 className="text-gray-600 font-bold">{priceprd}</h1>
        
        {/* Button with slide-up effect (Optional Premium Touch) */}
        <button className="w-full bg-[#19183B] text-[#E7F2EF] uppercase font-satoshi p-2 text-xs transition-all duration-300 hover:bg-[#252458]">
            Add To Cart
        </button>
    </div>
</div>
        
        </>
    )
}

export default CardsUI