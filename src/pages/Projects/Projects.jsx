import React from "react";
import Faq from "../../components/Faq/Faq";
import Testimonials from "../../components/Testimonials/Testimonials";
import OurWorks from "../../components/OurWorks/OurWorks";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";

export default function Projects() {
  return (
    <>
      <ProjectHeader />
      <FeaturesBox />
      <OurWorks />
      <Testimonials />
      <Faq />
    </>
  );
}
