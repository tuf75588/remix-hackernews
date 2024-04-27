import {
  useLoaderData,
  type ClientLoaderFunctionArgs,
  type ClientActionFunctionArgs,
} from "@remix-run/react";

import { MainLayout } from "~/layouts/main-layout";

export default function IndexPage(): JSX.Element {
  return (
    <MainLayout>
      <p>temp child content</p>
    </MainLayout>
  );
}
