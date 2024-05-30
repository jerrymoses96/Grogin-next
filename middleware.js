import { getCookie } from "cookies-next";

export function middleware(req, ev) {
  const auth = getCookie("auth", { req });

  if (!auth && req.nextUrl.pathname !== "/login") {
    return Response.redirect(new URL("/login", req.url));
  }
}
