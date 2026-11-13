import { Hono } from "hono";

// Declaration merge: the generated Env is empty until `wrangler types` is
// re-run on Node 22+; declare the assets binding so the worker compiles now.
interface Env {
	ASSETS: { fetch: typeof fetch };
}

const app = new Hono<{ Bindings: Env }>();

/**
 * Apex routing for avallen.studio.
 *
 * Try the marketing site first; anything that isn't a real page or asset
 * proxies to the app origin while keeping the apex URL. That preserves the
 * teacher vanity URLs - avallen.studio/{handle} serves the PWA without a
 * redirect - and means marketing pages win automatically once they exist.
 * No reserved-word list to maintain here; the API already stops handles
 * colliding with marketing paths.
 *
 * Requires wrangler.json assets.not_found_handling = "none" so missing
 * assets surface as real 404s (SPA fallback would swallow every path).
 * If the marketing site later adds client-side routes, gate the proxy on
 * a path allowlist instead.
 */
const APP_ORIGIN_HOST = "app.avallen.studio";

app.all("*", async (c) => {
	const res = await c.env.ASSETS.fetch(c.req.raw);
	if (res.status !== 404) return res;

	const url = new URL(c.req.url);
	url.protocol = "https:";
	url.hostname = APP_ORIGIN_HOST;
	return fetch(new Request(url.toString(), c.req.raw));
});

export default app;
