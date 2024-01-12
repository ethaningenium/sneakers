import { useQuery } from "@tanstack/react-query";

import Item from "@/components/Common/Item";
import { fetchAll } from "@/lib/fetching/fetch";
import ItemLoading from "@/components/Common/ItemLoading";

type PropsType = {
  title: string;
};

const SimilarItems: React.FC<PropsType> = (props) => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });
  return (
    <section className="w-full flex flex-col gap-8">
      <h2 className="lg:text-3xl text-2xl font-semibold text-gray-900">
        {props.title}
      </h2>
      <div className="w-full flex overflow-x-scroll gap-4 pb-16 pl-2">
        {data
          ? data.map((item) => {
              return <Item key={item.id} {...item} />;
            })
          : [...Array(3)].map((_, i) => {
              return <ItemLoading key={i} />;
            })}
      </div>
    </section>
  );
};

export default SimilarItems;
