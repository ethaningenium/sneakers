import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Images } from "./images";
import { Reviews } from "./review";
import { SimilarItems } from "./similar";
import { Description } from "./description";
import { fetchById } from "@/lib/fetching/fetch";
import { ImagesLoading } from "./images-loading";
import { DescriptionLoading } from "./desc-loading";

export const SneakersPage = () => {
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
          {data ? <Images {...data} /> : <ImagesLoading />}
          {data ? <Description {...data} /> : <DescriptionLoading />}
        </section>
        <Reviews />
        <SimilarItems title="Похожие товары: " />
      </div>
    </main>
  );
};
