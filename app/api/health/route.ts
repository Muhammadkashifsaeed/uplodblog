import { connection, NextResponse } from "next/server";
import type { ApiResponse, HealthCheckPayload } from "@/types";

export async function GET() {
  await connection();

  const payload: ApiResponse<HealthCheckPayload> = {
    success: true,
    message: "Service is healthy.",
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV ?? "development",
      uptimeSeconds: Math.floor(process.uptime()),
    },
  };

  return NextResponse.json(payload, { status: 200 });
}

