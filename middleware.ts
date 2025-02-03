import { NextResponse, NextRequest } from "next/server";

const publicRoutes = ["/", "/about", "/contact"];
const privateRoutes = ["/admin", "/profile"];

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  if (privateRoutes.includes(currentPath)) {
    const isAuthenticated = checkAuthentication(request);
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
    }
  }

  if (publicRoutes.includes(currentPath)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

function checkAuthentication(request: NextRequest) {
  const user = request.cookies.get("user");
  return user ? true : false;
}

export const config = {
  matcher: "/:path*",
};
