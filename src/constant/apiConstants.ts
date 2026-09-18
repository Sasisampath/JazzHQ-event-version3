const rawApiUrl = process.env.NEXT_PUBLIC_PRM_API_URL ?? "";
let formattedApiUrl = rawApiUrl.trim();
if (formattedApiUrl && !formattedApiUrl.startsWith("http://") && !formattedApiUrl.startsWith("https://")) {
  formattedApiUrl = `https://${formattedApiUrl}`;
}

export const API_BASE_URL = formattedApiUrl;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const LISTINGS_PER_PAGE = 20;
