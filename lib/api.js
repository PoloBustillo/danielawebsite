import axios from "axios";

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_SERVER_CMS_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl);
  const data = await response.data;
  return data;
}
