export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Diamond Peak.jpg","images/Mt. Hood.jpg","images/Mt. Jefferson.jpg","images/Mt. Rainier.jpg","images/Mt. Thielsen.jpg","images/github.svg","images/north-cascades-2.jpg","images/north-cascades-img.webp","images/svelte-logo.svg","images/svelte-welcome.png","images/svelte-welcome.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e55720a3.js","app":"_app/immutable/entry/app.5ca4be35.js","imports":["_app/immutable/entry/start.e55720a3.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/singletons.f965f5d7.js","_app/immutable/chunks/index.f5ae6842.js","_app/immutable/entry/app.5ca4be35.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/index.5fbdb1aa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,2,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard/[uid]",
				pattern: /^\/dashboard\/([^/]+?)\/?$/,
				params: [{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
