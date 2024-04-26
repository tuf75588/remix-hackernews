import { useLocation, useSearchParams } from '@remix-run/react';
import { getPageNumberFromSearchParams } from './news-page-number';

export function useCurrentPathname(): string {
  const loc = useLocation();
  return loc.pathname;
}

export function usePageNumber(): number {
  const [searchParams] = useSearchParams();
  return getPageNumberFromSearchParams(searchParams);
}
