import qs from "qs";

/**
 * Fetches a resource from the server.
 *
 * @param path The API path to query. Must not contain a leading slash.
 * @param urlParamsObject An object containing query parameters, formatted for qs.
 * @param options Additional options to include in the request.
 */
export const fetchResource = async (
  path: string,
  urlParamsObject: object,
  options: object,
) => {
  try {
    // Merge default and user options.
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      ...options,
    };

    // Build request URL.
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
    });
    const requestUrl = `${process.env.STRAPI_API_URL}/${path}${
      queryString ? `?${queryString}` : ""
    }`;

    // Trigger API call.
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (err: unknown) {
    throw new Error(
      "Error fetching resource from server. Is the server running?",
    );
  }
};
