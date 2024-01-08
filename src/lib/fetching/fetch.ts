import api from "@/lib/fetching/axios";
import { ProductType } from "@/lib/types/contract";

export async function fetchAll() {
  const elem = await api.get("/");
  return elem.data as ProductType[];
}

export async function fetchById(id: string | undefined) {
  const elem = await api.get(`/${id}`);
  return elem.data as ProductType;
}
