import React from "react";
import { ProductType } from "@/lib/contract";
import Item from "../Item";

const SimilarItems: React.FC<{
  items: ProductType[];
}> = (props) => {
  return (
    <section className="w-full flex flex-col gap-8">
      <h2 className="lg:text-3xl text-2xl font-semibold text-gray-900">
        Похижие товары:
      </h2>
      <div className="w-full flex overflow-x-scroll gap-4 pb-16 pl-2">
        {props.items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default SimilarItems;
