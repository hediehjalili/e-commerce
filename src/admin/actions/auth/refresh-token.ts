"use server";

import { apiFetch } from "@/api/server-api/base";
import { AUTH_BASE_URL } from "@/config.server";
import { auth, createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server"; // استفاده از NextResponse برای هدایت صحیح

export async function refreshTokenAction() {
  try {
    // دریافت مقدار معتبر از NEXT_PUBLIC_BASE_URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // دریافت توکن رفرش
    const { refreshToken } = await auth();

    if (!refreshToken) {
      console.error("No refresh token found.");
      await deleteSession();
      return NextResponse.redirect(`${baseUrl}/auth/login`); // اصلاح آدرس
    }

    // ارسال درخواست برای دریافت توکن جدید
    const data = await apiFetch<{ accessToken: string; refreshToken: string }>(
      `${AUTH_BASE_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!data.accessToken || !data.refreshToken) {
      console.error("Failed to retrieve new tokens.");
      await deleteSession();
      return NextResponse.redirect(`${baseUrl}/auth/login`); // اصلاح آدرس
    }

    // ذخیره توکن جدید در سشن
    await createSession(data);

  } catch (error) {
    console.error("Error refreshing token:", error);
    await deleteSession();
    return NextResponse.redirect("http://localhost:3000/auth/login"); // مقدار پیش‌فرض
  }
}