import React, { useEffect } from "react";
import { ProductType } from "@/lib/types/contract";

import ImageShower from "./ImageShowerX";
import Reviews from "./ReviewX";
import SimilarItems from "./SimilarItemsX";
import ItemDescription from "./ItemDescriptionX";

const FullScreenItem: React.FC<ProductType> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <main className="flex flex-col items-center ">
      <div className="container py-8 sm:py-16 sm:px-0 px-4 flex flex-col gap-16">
        <section className="w-full flex md:flex-row flex-col gap-8">
          <ImageShower {...props} />
          <ItemDescription {...props} />
        </section>
        <Reviews />
        <SimilarItems />
      </div>
    </main>
  );
};

export default FullScreenItem;
