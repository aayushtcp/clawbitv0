import CompanyStats from '@company-components/CompanyStats';
import AboutUs from '@home-components/AboutUs';
import Experience from '@home-components/Experience';
import Faq from '@home-components/Faq';
import OurTeam from '@home-components/OurTeam';
import Services from '@home-components/Services';
import SliderButton from '@shared-components/CustomBadge';
import FeaturedProjects from '@home-components/FeaturedProjects';
import OurClients from '@home-components/OurClients';
import WhyChooseUs from '@home-components/WhyChooseUs';
import Hero from '@home-components/Hero';
import ChaseAnimation from '@shared-components/ChaseAnimation';

export default function Home() {
  return (
    <>
      <Hero />
      {/* TODO: Unhide after real implemeantation */}
      <div className="hidden">
        <OurClients />
      </div>
      <FeaturedProjects />
      <ChaseAnimation />
      <SliderButton label="All Projects" />
      <WhyChooseUs />
      <Services />
      <AboutUs />
      <Experience />
      <CompanyStats showBottomBorder={false} />
      <OurTeam />
      <Faq />
    </>
  );
}
