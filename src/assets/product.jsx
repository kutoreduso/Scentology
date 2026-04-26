
export const CardsProduct = [
{ brandid: 1, brandname: "Afnan 9pm", brandprice: "P1800", brandpic: "./prd/9pm.png", hoverbrand: "/prd/9pm1.png", brandcall: "Afnan" },
    { brandid: 2, brandname: "Lattafa Asad", brandprice: "P1400", brandpic: "./prd/asad.png", hoverbrand: "/prd/asad1.png", brandcall: "Lattafa" },
    { brandid: 3, brandname: "Stronger With You Intensely", brandprice: "P6400", brandpic: "./prd/swyi.png", hoverbrand: "/prd/swyi1.png", brandcall: "Emporio Armani" },
    { brandid: 4, brandname: "Scandal Pour Homme Le Parfum", brandprice: "P6000", brandpic: "./prd/pour-homme.png", hoverbrand: "/prd/pour-homme1.png", brandcall: "Jean Paul Gaultier" },
    { brandid: 5, brandname: "Hugo Boss Absolu Elixir", brandprice: "P4500", brandpic: "./prd/hugo-boss.png", hoverbrand: "/prd/hugo-boss1.png", brandcall: "Hugo Boss" },
    { brandid: 6, brandname: "Dolce & Gabbana The One EDP", brandprice: "P4500", brandpic: "./prd/the-one.png", hoverbrand: "/prd/the-one1.png", brandcall: "Dolce & Gabbana" },
    { brandid: 7, brandname: "Club de Nuit Intense Man", brandprice: "P2200", brandpic: "./prd/cdnim.jpg", hoverbrand: "/prd/cdnim1.jpg", brandcall: "Armaf" },
    { brandid: 8, brandname: "Le Male Elixir", brandprice: "P6500", brandpic: "./prd/le-male-elixir.jpg", hoverbrand: "/prd/le-male-elixir1.jpg", brandcall: "Jean Paul Gaultier" },
    { brandid: 9, brandname: "Turathi Blue", brandprice: "P1900", brandpic: "./prd/turathi.jpg", hoverbrand: "/prd/turathi1.jpg", brandcall: "Afnan" },
    { brandid: 10, brandname: "K Khamrah", brandprice: "P1600", brandpic: "./prd/khamrah.jpg", hoverbrand: "/prd/khamrah1.jpg", brandcall: "Lattafa" },
    { brandid: 11, brandname: "YSL Myself EDP", brandprice: "P6200", brandpic: "./prd/ysl-myself.jpg", hoverbrand: "/prd/ysl-myself1.jpg", brandcall: "Yves Saint Laurent" },
    { brandid: 12, brandname: "Azzaro The Most Wanted", brandprice: "P5800", brandpic: "./prd/azzaro.png", hoverbrand: "/prd/azzaro1.png", brandcall: "Azzaro" },
    { brandid: 13, brandname: "Rayhaan Lion", brandprice: "P1650", brandpic: "./prd/lion.png", hoverbrand: "/prd/lion1.png", brandcall: "Rayhaan" },
    { brandid: 14, brandname: "Lattafa Vintage Radio", brandprice: "P2100", brandpic: "./prd/vintage-radio.png", hoverbrand: "/prd/vintage-radio1.png", brandcall: "Lattafa" },
    { brandid: 15, brandname: "Afnan Rare Carbon", brandprice: "P1850", brandpic: "./prd/rare-carbon.png", hoverbrand: "/prd/rare-carbon1.png", brandcall: "Afnan" },
    { brandid: 16, brandname: "Sauvage Elixir", brandprice: "P9500", brandpic: "./prd/sauvage.png", hoverbrand: "/prd/sauvage1.png", brandcall: "Dior" },
    { brandid: 17, brandname: "Valentino Uomo Born In Roma", brandprice: "P6200", brandpic: "./prd/valentino3.png", hoverbrand: "/prd/valentino4.png", brandcall: "Valentino" },
    { brandid: 18, brandname: "Hawas for Him", brandprice: "P2400", brandpic: "./prd/hawas.png", hoverbrand: "/prd/hawas1.png", brandcall: "Rasasi" },
    { brandid: 19, brandname: "Spectre Ghost", brandprice: "P2200", brandpic: "./prd/spectre.png", hoverbrand: "/prd/spectre1.png", brandcall: "French Avenue" },
    { brandid: 20, brandname: "Acqua di Gio Profondo", brandprice: "P5800", brandpic: "./prd/adg.png", hoverbrand: "/prd/adg1.png", brandcall: "Giorgio Armani" },
    { brandid: 21, brandname: "Detour Noir", brandprice: "P1600", brandpic: "./prd/detour.png", hoverbrand: "/prd/detour1.png", brandcall: "Al Haramain" },
    { brandid: 22, brandname: "Eros Flame", brandprice: "P4800", brandpic: "./prd/eros.png", hoverbrand: "/prd/eros1.png", brandcall: "Versace" }




]

import gsap from "gsap";
const Productsection = ({brandname,brandprice,brandpic,hoverbrand}) => {
// Quick GSAP reveal for your grid
gsap.from(".product-card", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1, // This creates that "one-by-one" reveal effect
  ease: "power3.out"
});
    return(
        <>
      <div>
            <div className="group flex-none snap-center lg:w-60 w-60 cursor-pointer product-card">
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-square product-card">
        {/* Primary Image (Default) */}
        <img 
            src={brandpic} 
            alt={brandname}
            className="bg-trasparent mix-blend-multiply absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Secondary Image (Visible on Hover) */}
        <img 
            src={hoverbrand} // Add your hover image variable here
            alt={`${brandname} detail`}
           className="bg-trasparent mix-blend-multiply absolute inset-0 object-cover w-full h-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-90"
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