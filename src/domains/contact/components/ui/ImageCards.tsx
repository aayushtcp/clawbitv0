import CustomCard from '@/shared/components/CustomCard';
import imageCards from '@contact-constants/image-cards';

const ImageCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-1 py-20">
      {imageCards.map((card, index) => (
        <CustomCard
          key={index}
          img={card.img}
          url={card.url}
          containerHeight={card.containerHeight}
          containerWidth={card.containerWidth}
        />
      ))}
    </div>
  );
};

export default ImageCards;
