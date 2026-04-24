import AnnouncementSection from "./components/Announcement"
import NavbarSection from "./components/navbar"
import HeaderSection from "./components/Header"
import CollectionSection from "./components/collection"
import BenefitSection from "./components/benefit"
import FeaturedSection from "./components/featured"
import FooterSection from "./components/footer"
const HomeSection = () => {
    return(
        <>
        <div className="bg-[#E7F2EF]">
 <AnnouncementSection/>
        <NavbarSection/>
        <HeaderSection/>
        <CollectionSection/>
        <BenefitSection/>
        <FeaturedSection />


        <FooterSection/>
        </div>
       
        
        </>
    )
}

export default HomeSection