export enum URLSearchParamFields  {
  HOW = 'how',
  GOTO = 'goto',
  PAGE = 'p',
  ID = 'id',
}

export enum URLSearchParaHowValue {
  UPVOTE = 'up',
  UNVOTE = 'un',
}

export function getSearchParamsFromRequest(request: Request) {
  return new URL(request.url).searchParams;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsserted(value: any): boolean {
  return value === undefined || value === null || value === false;
}

/* catch boundaries */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkBadRequest(value: any, message: string): asserts value {
  if (isAsserted(value)) {
    throw new Response(message, { status: 400, statusText: 'Bad request' });
  }
  return;
}

export function checkUnauthorized(
  value: unknown,
  message: string
): asserts value {
  if (isAsserted(value)) {
    throw new Response(message, { status: 401, statusText: 'Not Authorized' });
  }
  return;
}

export function checkForbidden(value: unknown, message: string): asserts value {
  if (isAsserted(value)) {
    throw new Response(message, { status: 403, statusText: 'Forbidden' });
  }
  return;
}

export function checkNotFound(value: unknown, message: string): asserts value {
  if (isAsserted(value)) {
    throw new Response(message, { status: 404, statusText: 'Not Found' });
  }
  return;
}
