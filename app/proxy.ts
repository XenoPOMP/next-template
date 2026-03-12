import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { paraglideMiddleware } from '@/paraglide/server';

// eslint-disable-next-line jsdoc/require-jsdoc
export function proxy(request: NextRequest) {
  return paraglideMiddleware(request, ({ request, locale }) => {
    request.headers.set('x-paraglide-locale', locale);
    request.headers.set('x-paraglide-request-url', request.url);
    return NextResponse.rewrite(request.url, request);
  });
}
