import { ProductType } from "@/lib/contract";
import { useLikedItems } from "@/lib/hooks";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const ImageShower: React.FC<ProductType> = (props) => {
  const [currentImageIndex, setCurrentImage] = useState(0);
  const [isLiked, handleLikeClick] = useLikedItems(props);

  return (
    <div className="flex lg:flex-row flex-col-reverse justify-end lg:justify-normal h-auto w-full md:w-1/2 gap-4 relative">
      <div className="flex lg:flex-col gap-2 lg:w-auto lg:h-full lg:overflow-auto overflow-x-scroll">
        {props.images.map((image, i) => {
          return (
            <img
              key={i}
              onClick={() => setCurrentImage(i)}
              src={image}
              alt="img"
              loading="lazy"
              className="w-32 lg:w-auto rounded-lg object-cover flex-1 hover:opacity-80 active:scale-95 transition duration-300 cursor-pointer"
            />
          );
        })}
      </div>
      <img
        loading="lazy"
        className="lg:w-2/3 object-cover rounded-2xl"
        src={props.images[currentImageIndex]}
        alt="img"
      />
      <button
        onClick={handleLikeClick}
        className="absolute top-6 right-6 rounded-full bg-white shadow-xl shadow-black/10 p-2 cursor-pointer transition"
      >
        <Heart fill={isLiked ? "red" : "#D9D9D9"} stroke="none" />
      </button>
    </div>
  );
};

export default ImageShower;
