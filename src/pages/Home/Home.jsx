import Faq from "../../components/Faq/Faq";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import OurWorks from "../../components/OurWorks/OurWorks";
import Reasons from "../../components/Reasons/Reasons";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Testimonials from "../../components/Testimonials/Testimonials";



export default function Home() {
  return (
    <>
    <GetInTouch/>
    <Reasons/>
    <ServicesSection/>
    <OurWorks/>
    <Testimonials/>
    <Faq/>
    </>
  )
}
