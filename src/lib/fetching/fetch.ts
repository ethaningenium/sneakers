import api from "@/lib/fetching/axios";
import { ProductType } from "@/lib/types/contract";

export async function fetchAll() {
  const elem = await api.get<ProductType[]>("/");
  return elem.data;
}

export async function fetchById(id: string | undefined) {
  const elem = await api.get<ProductType>(`/${id}`);
  return elem.data;
}
