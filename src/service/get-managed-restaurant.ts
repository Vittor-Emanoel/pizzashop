import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  managerId: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>("/managed-restaurant");

  return response.data;
}
