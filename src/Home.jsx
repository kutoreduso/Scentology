import AnnouncementSection from "./components/Announcement"
import NavbarSection from "./components/navbar"
import HeaderSection from "./components/Header"
import CollectionSection from "./components/collection"

const HomeSection = () => {
    return(
        <>
        <div className="bg-[#E7F2EF]">
 <AnnouncementSection/>
        <NavbarSection/>
        <HeaderSection/>
        <CollectionSection/>
        </div>
       
        
        </>
    )
}

export default HomeSection