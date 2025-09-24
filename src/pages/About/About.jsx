import AboutHeader from "../../components/AboutHeader/AboutHeader";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import AwardsSection from "../../components/AwardsSection/AwardsSection";
import Faq from "../../components/Faq/Faq";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function About() {
  return (
    <>
<AboutHeader />
<TeamSection />
    <AchievementsSection />
      <AwardsSection />
      <Testimonials />
      <Faq />
    </>
  );
}
