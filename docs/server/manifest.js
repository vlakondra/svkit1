export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svkit1/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CPOZL5oU.js",app:"_app/immutable/entry/app.CkreK-7z.js",imports:["_app/immutable/entry/start.CPOZL5oU.js","_app/immutable/chunks/Cr1geq_8.js","_app/immutable/chunks/VCco8WXk.js","_app/immutable/chunks/CQ0FdIxn.js","_app/immutable/chunks/Bh7g5Ui6.js","_app/immutable/entry/app.CkreK-7z.js","_app/immutable/chunks/VCco8WXk.js","_app/immutable/chunks/DXZgKqdG.js","_app/immutable/chunks/D8AipEDR.js","_app/immutable/chunks/Bh7g5Ui6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/svkit1/","/svkit1/about/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
