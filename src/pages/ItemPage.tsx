import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullScreenItem from "@/components/FullScreen";

import { fetchById } from "@/lib/fetching/fetch";

const ItemPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => fetchById(id),
  });

  return (
    <>
      <Header />
      {data && !isLoading ? <FullScreenItem {...data} /> : null}
      <Footer />
    </>
  );
};

export default ItemPage;
