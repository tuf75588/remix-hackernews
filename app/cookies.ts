import { createCookieSessionStorage } from "@remix-run/node";

export enum SessionCookieProperties {
  USER_ID = "userId",
}

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a cookie from the hook `createCookie` or CookieOptions to create one
    cookie: {
      name: "_session",
      secrets: ["insecure_example"],
      sameSite: "strict",
      maxAge: 604_800,
    },
  });
