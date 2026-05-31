import Heading from '@/domains/home/components/OurClientHeader';
import { OUR_CLIENTS } from '@home-constants/index';
import CustomCard from '@shared-components/CustomCard';

const OurClients = () => {
  return (
    <div className="w-full px-5 mb-8 md:mb-16 md:px-10">
      <Heading />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-8 md:mt-16">
        {OUR_CLIENTS.map((client) => (
          <CustomCard
            key={client.id}
            img={client.logo}
            containerHeight="10rem"
            imageFit="contain"
            showBg={false}
            title={client.name}
            className="flex gap-0! flex-col-reverse items-center"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
