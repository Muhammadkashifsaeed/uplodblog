import axios, { AxiosError, type AxiosInstance } from "axios";
import { clientEnv } from "@/lib/env";
import type { ApiError } from "@/types";

/**
 * Shared Axios instance configured for internal Next.js API routes
 * and future external backend integration.
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: clientEnv.NEXT_PUBLIC_API_BASE_URL,
  timeout: clientEnv.NEXT_PUBLIC_API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // Attach auth tokens or correlation headers here when integrating an auth provider.
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string; details?: Record<string, string[]> }>) => {
    const normalizedError: ApiError = {
      message:
        error.response?.data?.message ??
        error.message ??
        "An unexpected network error occurred.",
      statusCode: error.response?.status ?? 500,
      code: error.response?.data?.code ?? error.code,
      details: error.response?.data?.details,
    };

    return Promise.reject(normalizedError);
  }
);

