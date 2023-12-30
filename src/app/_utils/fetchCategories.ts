import { fetchResource } from "./fetchResource";

interface FetchedCategory {
  id: number;
  attributes: {
    name: string;
    uid: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface FetchCategoriesResponse {
  data: Array<FetchedCategory>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const fetchCategories = async (): Promise<Array<string>> => {
  try {
    const requestParams = {
      pagination: {
        page: 1,
        pageSize: 99,
      },
      sort: ["name"],
    };

    const response: FetchCategoriesResponse = await fetchResource(
      "categories",
      requestParams,
      {},
    );

    const categoryNames: Array<string> = response.data.map(
      (category: FetchedCategory) => category.attributes.name,
    );

    return categoryNames;
  } catch (err: unknown) {
    throw new Error("Error fetching categories.");
  }
};
