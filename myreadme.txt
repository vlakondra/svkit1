npm run dev -- --open

python -m http.server

https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages

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
<<<<<<< HEAD
git checkout main [ghpages]
=======
копирование build в docs: cp -r build/* docs/
====================================================
Instead of manually copying the content of the  build  folder to the  gh-pages  branch, we can use the  gh-pages  npm package to automate this process. To do this, we need to install the package:

pnpm add -D gh-pagescp -r build/* docs/
Then, we need a new script in the  package.json  file to deploy the website:

{
    "scripts": {
        "deploy": "pnpm build && pnpx gh-pages -d build -t true"
    }
}
Finally, we can run the script to deploy the website:

pnpm deploy
====================================================

Попробовать убрать fallback в: 	adapter: adapter({
			fallback: '200.html' // may differ from host to host
		}),
===================================================
git config --global --get http.proxy
git config --global --get https.proxy

git config --global http.proxy http://username:password@proxy.server.com:port
git config --global https.proxy http://username:password@proxy.server.com:port
========================================================

xcopy build docs\ /E

rmdir docs /Q/S

############################################
27.02
установил:
npm i drizzle-orm @libsql/client
npm i -D drizzle-kit

from page.server.ts
const result = await db.all('select * from Artists');
>>>>>>> ghp


      // Transform the result into the desired format
        const formattedResult = result.reduce((acc, row) => {
            const { artName, albumId, albumTitle } = row;

            // Check if the artist already exists in the accumulator
            let artist = acc.find(a => a.artName === artName);
            if (!artist) {
                artist = { artName, albums: [] };
                acc.push(artist);
            }

            // Add the album to the artist's album list
            artist.albums.push({ title: albumTitle, albumId });

            return acc;
        }, []);

        console.log(formattedResult);
        return { result: formattedResult };
    } catch (error) {
        console.error(error);
        return { result: [] };
    }
}) satisfies PageServerLoad;