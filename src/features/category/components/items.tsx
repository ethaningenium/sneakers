import { ItemCard, ItemCardLoading } from "@/features/sneaker-card";
import { fetchAll } from "@/lib/fetching/fetch";
import { ProductType } from "@/lib/types/contract";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { filterItems } from "../services/filtering";
import React from "react";
import { useLocation } from "react-router-dom";

export const Items = () => {
  const [items, setItems] = React.useState<ProductType[]>([]);

  const location = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    let minPrice = queryParams.get("minPrice");
    let maxPrice = queryParams.get("maxPrice");
    const colors = queryParams.get("colors");
    let search = queryParams.get("search");

    let newColors: string[] = [];
    if (colors === null || colors === "") {
      newColors = [];
    } else {
      newColors = colors.split(",");
    }
    if (minPrice === null) {
      minPrice = "0";
    }
    if (maxPrice === null) {
      maxPrice = "10000";
    }
    if (search === null) {
      search = "";
    }

    console.log(minPrice, maxPrice, newColors);
    setItems(
      filterItems(data, Number(minPrice), Number(maxPrice), newColors, search)
    );
    console.log("first");
  }, [data, location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full  flex flex-wrap justify-center items-center gap-4 p-2 ">
      {items?.map((elem) => {
        return <ItemCard key={elem.id} {...elem} />;
      })}
      {isLoading &&
        [...Array(3)].map((_, i) => {
          return <ItemCardLoading key={i} />;
        })}
    </div>
  );
};
