

export const prdimg = [
    {id: 1, prdname:"Afnan 9pm", priceprd:"P1800", prdpic:"./prd/9pm.png" },
    {id: 2, prdname:"Lattafa Asad", priceprd:"P1400", prdpic:"./prd/asad.png" },
    {id: 3, prdname:"Stronger With You Intensly", priceprd:"P6400", prdpic:"./prd/swyi.png" },
    {id: 4, prdname:"Scandal Pour Homme Le Parfum", priceprd:"P6000", prdpic:"./prd/pour-homme.png" },
    {id: 5, prdname:"Hugo Boss Absolu Elixir", priceprd:"P4500", prdpic:"./prd/hugo-boss.png" },
    {id: 6, prdname:"Dolce & Gabbana The One EDP", priceprd:"P4500", prdpic:"./prd/the-one.png" },



]

const CardsUI = ({prdname, priceprd,prdpic}) => {
    return(
        <>
            <div className="flex-none snap-center lg:w-60 aspect-square w-60 ">
  
    <div className="border border-[#A1C2BD]">
        <img 
            src={prdpic}
            alt=""
            className="object-cover w-full h-64"
        />
    </div>

    <div className="mt-2 space-y-1">
        <h1>{prdname}</h1>
        <h1>{priceprd}</h1>
        <button className="w-full border bg-[#19183B] text-[#E7F2EF] uppercase font-satoshi p-2">
            Add To Cart
        </button>
    </div>

</div>
        
        </>
    )
}

export default CardsUI