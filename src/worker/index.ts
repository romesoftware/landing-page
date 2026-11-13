import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

/**
 * Apex routing for avallen.studio.
 *
 * Cloudflare serves the marketing site's static assets BEFORE invoking this
 * worker (default assets-first ordering), so any request that reaches here is
 * already "not a marketing page" - proxy it to the app origin while keeping
 * the apex URL. That preserves teacher vanity URLs
 * (avallen.studio/{handle} serves the PWA without a redirect) and means new
 * marketing pages win automatically once they exist.
 * No reserved-word list to maintain here; the API already stops handles
 * colliding with marketing paths.
 *
 * Requires wrangler.json assets.not_found_handling = "none" (SPA fallback
 * would serve index.html for every path and the proxy would never fire).
 * app.avallen.studio must stay DNS-only (grey cloud) - Workers can't fetch
 * a hostname in their own zone through the proxy.
 */
const APP_ORIGIN_HOST = "app.avallen.studio";

app.all("*", (c) => {
	const url = new URL(c.req.url);
	url.protocol = "https:";
	url.hostname = APP_ORIGIN_HOST;
	return fetch(new Request(url.toString(), c.req.raw));
});

export default app;
