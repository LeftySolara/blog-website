import { fetchResource } from "./fetchResource";

interface FetchedSeries {
  id: number;
  attributes: {
    name: string;
    uid: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface FetchSeriesResponse {
  data: Array<FetchedSeries>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const fetchSeries = async (): Promise<Array<string>> => {
  try {
    const requestParams = {
      pagination: {
        page: 1,
        pageSize: 99,
      },
      sort: ["name"],
    };

    const response: FetchSeriesResponse = await fetchResource(
      "allseries",
      requestParams,
      {},
    );

    const seriesNames: Array<string> = response.data.map(
      (series: FetchedSeries) => series.attributes.name,
    );

    return seriesNames;
  } catch (err: unknown) {
    throw new Error("Error fetching series.");
  }
};
