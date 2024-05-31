// middleware.js

import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export function middleware(req) {
  let token = req.cookies.get("token");

  // Define a regex pattern for dynamic routes
  const dynamicRoutePattern = /^\/main\/products\/\d+$/; // Matches paths like '/main/products/1', '/main/products/2', etc.

  // Check if the request is to a protected route and if the token is missing
  if (
    (req.nextUrl.pathname === "/" ||
      dynamicRoutePattern.test(req.nextUrl.pathname)) &&
    !token
  ) {
    // Redirect the user to the login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue to the requested page if authentication passes
  return NextResponse.next();
}
