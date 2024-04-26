import { useLocation, useParams, useSearchParams } from '@remix-run/react';

export function useCurrentPathname(): string {
  const loc = useLocation();
  return loc.pathname;
}

export function usePageNumber(): number {
  const [searchParams] = useSearchParams();
  return 2;
}
