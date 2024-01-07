import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/lib/contract";
import { fetchAll } from "@/lib/fetch";

import ImageShower from "./ImageShower";
import Reviews from "./Reviews";
import SimilarItems from "./SimilarItems";
import ItemDescription from "./ItemDescription";

const FullScreenItem: React.FC<ProductType> = (props) => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

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
        {data ? <SimilarItems items={data} /> : null}
      </div>
    </main>
  );
};

export default FullScreenItem;
