import Show from "@/components/Common/Show";

import { useFavorite } from "@/features/sneaker-card";
import { Heart } from "lucide-react";
import { ProductType } from "../services/type";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/lib/fetching/fetch";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import LikedDrawerItem from "./draweritem";

export const FavoriteIcon = () => {
  const { favoriteItems, toggle, setInitial } = useFavorite();
  const [likedItemsData, setLikedItemsData] = useState<ProductType[]>([]);
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

  useEffect(() => {
    setInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setLikedItemsData(
        data.filter((item) => {
          return favoriteItems.includes(item.id);
        })
      );
    }
  }, [favoriteItems, data]);
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex gap-1 items-center h-6 relative cursor-pointer text-zinc-600 hover:text-zinc-900 duration-200">
          <Show when={favoriteItems.length !== 0}>
            <span className=" text-white text-[10px] bg-red-500 absolute w-3 h-3 rounded-full flex justify-center items-center -top-1 -left-1 select-none cursor-pointer">
              {favoriteItems.length}
            </span>
          </Show>
          <Heart strokeWidth={1.5} />
          <span className=" text-sm">Избранное</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-center">
        <DrawerHeader className="max-w-96 mb-12 ">
          <DrawerTitle>Товары в избранное: </DrawerTitle>
        </DrawerHeader>
        {likedItemsData.map((item) => {
          return (
            <LikedDrawerItem
              key={item.id}
              item={item}
              deleteItem={() => {
                toggle(item.id);
              }}
            />
          );
        })}
        <DrawerFooter className="h-16"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
