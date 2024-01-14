import { useEffect } from "react";

import { Header } from "@/layouts/header";
import { Footer } from "@/layouts/footer";
import { ItemCard, ItemCardLoading } from "@/features/sneaker-card";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/lib/fetching/fetch";

export function Catalog() {
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="w-full bg-zinc-100 flex flex-wrap justify-center items-center p-12 gap-8 ">
        {data?.map((elem) => {
          return <ItemCard key={elem.id} {...elem} />;
        })}
        {isLoading &&
          [...Array(3)].map((_, i) => {
            return <ItemCardLoading key={i} />;
          })}
      </div>
      <Footer />
    </>
  );
}
