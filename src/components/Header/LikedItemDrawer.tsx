import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/lib/fetch";
import useLiked from "@/lib/zustand/likedStore";
import { ProductType } from "@/lib/contract";
import { Heart } from "lucide-react";
import LikedDrawerItem from "./LikedDrawerItem";
import { deleteLikedItemFromLocalStorage } from "@/lib/ls";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Icons from "./Icons";

const LikedItemDrawer = () => {
  const { likedItems, deleteItemFromLikedList } = useLiked();
  const [likedItemsData, setLikedItemsData] = React.useState<ProductType[]>([]);
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

  useEffect(() => {
    if (data) {
      setLikedItemsData(
        data.filter((item) => {
          return likedItems.includes(item.id);
        })
      );
    }
  }, [likedItems, setLikedItemsData, data]);

  return (
    <Drawer>
      <DrawerTrigger>
        <Icons
          Icon={Heart}
          count={likedItems.length}
          stroke={1.5}
          text="Избранное"
        />
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
                deleteLikedItemFromLocalStorage(item.id);
                deleteItemFromLikedList(item.id);
              }}
            />
          );
        })}
        <DrawerFooter className="h-16"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LikedItemDrawer;
