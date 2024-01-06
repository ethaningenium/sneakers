import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullScreenItem from "@/components/FullScreen/FullScreenItem";
import Show from "@/components/Show";

import { fetchById } from "@/lib/fetch";

const ItemPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => fetchById(id),
  });

  return (
    <>
      <Header />
      <Show when={!isLoading}>
        {data ? <FullScreenItem {...data} /> : null}
      </Show>
      <Footer />
    </>
  );
};

export default ItemPage;
