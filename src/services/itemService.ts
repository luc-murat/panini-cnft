import { useQuery } from "@tanstack/react-query";
import { collectionId, organizationId } from "../config";
import apiInstance from "../utils/api";

const fetchItems = async (organizationId: string, collectionId: string) => {
  // let searchParams = new URLSearchParams();
  // searchParams.set("collection_id", collectionId);

  const { data } = await apiInstance.get(
    // `/v2/public/${organizationId}/items?${searchParams}`
    `/v2/collections/${collectionId}/items`
  );

  return data;
};

export const useItems = () => {
  const { isError, isSuccess, data } = useQuery(
    ["items", organizationId, collectionId],
    () => {
      if (!organizationId || !collectionId) {
        return Error(
          "Please set organizationId and collectionId in the .env.local file"
        );
      }

      return fetchItems(organizationId, collectionId);
    }
  );

  console.log("data");
  console.log(data);

  return {
    items: Boolean(data) ? data : [],
    isError,
    isSuccess,
  };
};

const fetchItem = async (itemId: string) => {
  const { data } = await apiInstance.get(`/v2/items/${itemId}`);
  return data;
};

export const useItem = (itemId: string) => {
  const { isError, isSuccess, data } = useQuery(["item", itemId], () =>
    fetchItem(itemId)
  );

  return {
    item: Boolean(data) ? data : null,
    isError,
    isSuccess,
  };
};
