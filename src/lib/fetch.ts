import api from "@/lib/axios";
import { ProductType } from "@/lib/contract";

export async function fetchAll() {
  const elem = await api.get("/");
  return elem.data as ProductType[];
}

export async function fetchById(id: string | undefined) {
  const elem = await api.get(`/${id}`);
  return elem.data as ProductType;
}
