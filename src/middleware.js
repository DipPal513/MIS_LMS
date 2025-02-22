import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  console.log("middleware triggered");
  if (pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2|woff|ttf|otf|mp4|webm)$/)) {
    return NextResponse.next();
  }
  // Allow public access to "/", "/courses", and "/courses/:id"
  if (pathname === "/" || pathname === "/courses" || /^\/courses\/\d+$/.test(pathname)) {
    return NextResponse.next();
  }

  // Restrict logged-in users from accessing "/login"
  if (pathname === "/login" && authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If no auth token is found, restrict access to other routes except "/login"
  if (!authToken && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access to everything if logged in
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|public).*)", // Match all routes except _next, static, favicon.ico, and public
    "/login",
    
  ],
};
