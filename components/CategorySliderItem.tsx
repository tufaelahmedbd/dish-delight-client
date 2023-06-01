import Image from "next/image";
import Overlay from "./Overlay";

interface CategorySliderItemProps {
  image: string;
  name: string;
  alt: string;
}

const CategorySliderItem: React.FC<CategorySliderItemProps> = ({
  image,
  name,
  alt,
}) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={image}
        alt={alt}
        height={500}
        width={500}
        className=" w-full h-full object-cover"
      />
      <Overlay />
      <div className=" absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className=" text-3xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default CategorySliderItem;
