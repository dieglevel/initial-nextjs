import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.next(); // hoặc redirect nếu là trang bảo vệ
  }

  try {
    // jwt.verify(token, process.env.JWT_SECRET!)
    // ! Chưa xử lý access token và refresh token ở đây

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile"], // Trang cần auth
};
