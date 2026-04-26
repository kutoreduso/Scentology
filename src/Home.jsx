import HeaderSection from "./components/Header"
import CollectionSection from "./components/collection"
import BenefitSection from "./components/benefit"
import FeaturedSection from "./components/featured"
import TestimonialSection from "./components/testimonials"

const HomeSection = () => {
    return(
        <>
            <HeaderSection />
            <CollectionSection />
            <BenefitSection />
            <FeaturedSection />
            <TestimonialSection/>
        </>
    )
}

export default HomeSection;