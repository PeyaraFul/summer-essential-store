import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const path = request.nextUrl.pathname;

  const isProductDetailsPage =
    path.startsWith("/products/") && path.split("/").length > 2;

  if (!session && isProductDetailsPage) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", path);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"],
};
