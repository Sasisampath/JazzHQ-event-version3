import type { ApiResponse } from "@/features/marketplace/models/listingTypes";
import { API_BASE_URL } from "@/constant/apiConstants";

function getApiBaseUrl() {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    return "/api/prm-proxy";
  }
  if (!API_BASE_URL) return "";
  return API_BASE_URL.endsWith("/") ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { next?: { revalidate?: number | false } }
): Promise<T> {
  const base = getApiBaseUrl();
  if (!base) {
    throw new ApiError("NEXT_PUBLIC_PRM_API_URL is not configured", 500);
  }

  const { next, cache, ...requestInit } = init ?? {};

  const response = await fetch(`${base}${path.startsWith("/") ? path : `/${path}`}`, {
    ...requestInit,
    headers: {
      Accept: "application/json",
      ...(requestInit.headers || {}),
    },
    ...(cache === "no-store"
      ? { cache: "no-store" as const }
      : { next: next ?? { revalidate: 60 } }),
  });

  if (response.status === 404) {
    throw new ApiError("Not found", 404);
  }

  if (!response.ok) {
    let detail = "";
    try {
      const body = (await response.json()) as ApiResponse<unknown>;
      if (body.message) detail = `: ${body.message}`;
    } catch {
      // ignore non-JSON bodies (Spring Security often returns empty 401)
    }

    if (response.status === 401) {
      throw new ApiError(
        `API request unauthorized (401)${detail}. Public marketplace listings may not be enabled on this PRM backend yet — set NEXT_PUBLIC_USE_LISTING_MOCKS=true or redeploy prm-backend.`,
        response.status
      );
    }

    throw new ApiError(`API request failed (${response.status})${detail}`, response.status);
  }

  const json = (await response.json()) as ApiResponse<T>;
  if (!json.success) {
    throw new ApiError(json.message || "API returned unsuccessful response", response.status);
  }

  return json.data;
}
