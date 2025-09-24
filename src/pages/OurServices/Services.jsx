import Faq from "../../components/Faq/Faq";
import OurSevices from "../../components/OurSevices/OurSevices";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import Stories from "../../components/Stories/Stories";
import Testimonials from "../../components/Testimonials/Testimonials";


export default function Services() {
  return (
    <>
    <ServiceHeader/>
    <OurSevices />
    <Stories  />
    <Testimonials/>
    <Faq/>
    </>
  )
}
