export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  code?: string;
  details?: Record<string, string[]>;
}

export interface HealthCheckPayload {
  status: "ok" | "degraded";
  timestamp: string;
  environment: string;
  uptimeSeconds: number;
}

