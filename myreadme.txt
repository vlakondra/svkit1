npm run dev -- --open

python -m http.server


сразу после создания проекта запустил npm run build
и получил эту ошибку:

 all routes must be fully prerenderable, but found the following routes that are dynamic:    - src\routes/

  You have the following options:
    - set the `fallback` option — see https://svelte.dev/docs/kit/single-page-apps#usage for more info.
    - add `export const prerender = true` to your root `+layout.js/.ts` or `+layout.server.js/.ts` file. This will try to prerender all pages.
    - add `export const prerender = true` to any `+server.js/ts` files that are not fetched by page `load` functions.

    - pass `strict: false` to `adapter-static` to ignore this error. Only do this if you are sure you don't need the routes in question in your final app, as they will be unavailable. See https://github.com/sveltejs/kit/tree/main/packages/adapter-static#strict for more info.

  If this doesn't help, you may need to use a different adapter. @sveltejs/adapter-static can only be used for sites that don't need a server for dynamic rendering, and can run on just a static file server.
  See https://svelte.dev/docs/kit/page-options#prerender for more details
error during build:
Error: Encountered dynamic routes
    at adapt (file:///C:/Learn/svkit1/node_modules/@sveltejs/adapter-static/index.js:38:12)
    at adapt (file:///C:/Learn/svkit1/node_modules/@sveltejs/kit/src/core/adapt/index.js:38:8)
    at finalise (file:///C:/Learn/svkit1/node_modules/@sveltejs/kit/src/exports/vite/index.js:1030:13)
    at async Object.handler (file:///C:/Learn/svkit1/node_modules/@sveltejs/kit/src/exports/vite/index.js:1060:5)   
    at async PluginDriver.hookParallel (file:///C:/Learn/svkit1/node_modules/rollup/dist/es/shared/node-entry.js:21736:17)
    at async Object.close (file:///C:/Learn/svkit1/node_modules/rollup/dist/es/shared/node-entry.js:22720:13)
    at async buildEnvironment (file:///C:/Learn/svkit1/node_modules/vite/dist/node/chunks/dep-M1IYMR16.js:51099:17)
    at async Object.defaultBuildApp [as buildApp] (file:///C:/Learn/svkit1/node_modules/vite/dist/node/chunks/dep-M1IYMR16.js:51513:5)
    at async CAC.<anonymous> (file:///C:/Learn/svkit1/node_modules/vite/dist/node/cli.js:853:7)
=================================================================================================
чтобы исправить создал +layout.ts
со строкой: export const prerender = true;
а в svelte.config.js добавил:
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		//pages: 'build',
		//assets: 'build',
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		}),
		//precompress: false,
		//strict: false
	} (опции pages, assets и 2 других KIT не принял)
    и снова запустил npm run build. Статичный сайт с одной страницей сгенерировался
    в папке build. смотреть -  npm run preview
===================================================================

git remote add origin https://github.com/vlakondra/svkit1.git
git branch -M main
git push -u origin main
===================================================================
git checkout main [ghpages]
