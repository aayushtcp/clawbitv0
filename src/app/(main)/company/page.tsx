import CompanyVideo from '@company-components/CompanyVideo';
import Hero from '@company-components/Hero';
import CompanyStats from '@company-components/CompanyStats';
import ApproachInfo from '@company-components/ApproachInfo';
import OurTeam from '@company-components/OurTeam';
import ImageCards from '@contact-components/ui/ImageCards';
import { AwardIntro } from '@company-components/AwardIntro';

const page = () => {
  return (
    <section>
      <Hero />
      <CompanyVideo />
      <CompanyStats />
      <ApproachInfo />
      <AwardIntro />
      <OurTeam />
      <div className="px-7">
        <ImageCards />
      </div>
    </section>
  );
};

export default page;
