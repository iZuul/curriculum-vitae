import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const isKeystaticRoute = context.url.pathname.startsWith('/api/keystatic');

  if (isKeystaticRoute) {
    const forwardedHost = context.request.headers.get('x-forwarded-host');
    const forwardedProto = context.request.headers.get('x-forwarded-proto') || 'https';

    if (forwardedHost) {
      const correctUrl = new URL(context.request.url);
      correctUrl.host = forwardedHost;
      correctUrl.protocol = forwardedProto;

      // Reconstruct request with the correct public domain from Vercel proxy headers
      const newRequest = new Request(correctUrl.toString(), {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.body,
        // @ts-ignore
        duplex: 'half',
      });

      Object.defineProperty(context, 'request', { value: newRequest, writable: false });
      Object.defineProperty(context, 'url', { value: correctUrl, writable: false });
    }
  }

  return next();
});
