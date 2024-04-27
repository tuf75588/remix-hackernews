import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { MeContext } from "~/utils/context";
import { getSession, SessionCookieProperties } from "../cookies";

export interface IMainLoader {
  me: { id: string; karma: number } | undefined;
}

export default function Index() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
