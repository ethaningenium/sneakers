import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import ImageShower from "./ImageShowerX";
import Reviews from "./ReviewX";
import SimilarItems from "./SimilarItemsX";
import ItemDescription from "./ItemDescriptionX";
import { fetchById } from "@/lib/fetching/fetch";
import ImageShowerLoading from "./ImageShowerLoading";
import ItemDescriptionLoading from "./ItemDescriptionLoading";

const FullScreenItem = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => fetchById(id),
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="flex flex-col items-center ">
      <div className="container py-8 sm:py-16  px-4 flex flex-col gap-16">
        <section className="w-full flex md:flex-row flex-col gap-8">
          {data ? <ImageShower {...data} /> : <ImageShowerLoading />}
          {data ? <ItemDescription {...data} /> : <ItemDescriptionLoading />}
        </section>
        <Reviews />
        <SimilarItems title="Похожие товары: " />
      </div>
    </main>
  );
};

export default FullScreenItem;
