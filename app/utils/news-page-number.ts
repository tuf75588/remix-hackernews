import { URLSearchParamFields } from './http-handler';

/**
 * Page number starts at 1.
 * Non-valid page numbers also are resolved to 1.
 */

export function getPageNumberFromSearchParams(
  searchParams: URLSearchParams
): number {
  const param = searchParams.get(URLSearchParamFields.PAGE);
  const pageNumber: number = +(param || 1);
  return Number.isNaN(pageNumber) ? 1 : pageNumber;
}
