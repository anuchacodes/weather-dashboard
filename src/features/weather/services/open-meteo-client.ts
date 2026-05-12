import axios, { AxiosError } from "axios";

import { env } from "@/lib/env";

export const openMeteoClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10_000,
});

export class WeatherApiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "WeatherApiError";
  }
}

openMeteoClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ reason?: string }>) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.reason ??
      error.message ??
      "ไม่สามารถโหลดข้อมูลสภาพอากาศได้";

    return Promise.reject(new WeatherApiError(message, status));
  },
);
