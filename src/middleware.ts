import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // بررسی لاگین از کوکی‌ها

  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // اگر لاگین نبود، به صفحه لاگین منتقل شود
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // این Middleware فقط روی مسیرهای /admin اجرا می‌شود
};