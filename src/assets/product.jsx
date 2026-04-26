
export const CardsProduct = [
{brandid: 1, brandname:"Afnan 9pm", brandprice:"P1800", brandpic:"./prd/9pm.png", hoverbrand:"/prd/9pm1.png" },
    {brandid: 2, brandname:"Lattafa Asad", brandprice:"P1400", brandpic:"./prd/asad.png", hoverbrand:"/prd/asad1.png" },
    {brandid: 3, brandname:"Stronger With You Intensly", brandprice:"P6400", brandpic:"./prd/swyi.png",hoverbrand:"/prd/swyi1.png" },
    {brandid: 4, brandname:"Scandal Pour Homme Le Parfum", brandprice:"P6000", brandpic:"./prd/pour-homme.png", hoverbrand:"/prd/pour-homme1.png" },
    {brandid: 5, brandname:"Hugo Boss Absolu Elixir", brandprice:"P4500", brandpic:"./prd/hugo-boss.png",hoverbrand:"/prd/hugo-boss1.png"},
    {brandid: 6, brandname:"Dolce & Gabbana The One EDP", brandprice:"P4500", brandpic:"./prd/the-one.png",hoverbrand: "/prd/the-one1.png"},





]


const Productsection = ({brandname,brandprice,brandpic,hoverbrand}) => {

    return(
        <>
      <div>
            <div className="group flex-none snap-center lg:w-60 w-60 cursor-pointer">
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-square ">
        {/* Primary Image (Default) */}
        <img 
            src={brandpic} 
            alt={brandname}
            className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Secondary Image (Visible on Hover) */}
        <img 
            src={hoverbrand} // Add your hover image variable here
            alt={`${brandname} detail`}
           className="absolute inset-0 object-cover w-full h-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-90"
        />
    </div>

    {/* Text Content */}
    <div className="mt-2 space-y-1">
        <h1 className="font-medium text-sm">{brandname}</h1>
        <h1 className="text-gray-600 font-bold">{brandprice}</h1>
        
        {/* Button with slide-up effect (Optional Premium Touch) */}
        <button className="w-full bg-[#A1C2BD] text-[#19183B] uppercase font-satoshi p-2 text-xs transition-all duration-300 hover:bg-[#708993] hover:text-[#E7F2EF]">
            Add To Cart
        </button>
    </div>
</div>
</div>
        </>
    )
}
export default Productsection