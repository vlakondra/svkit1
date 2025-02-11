import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
    //??
	build: {
		outDir: 'docs', // Укажите желаемую папку вывода
	  },

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		//pages: 'build',
		//assets: 'build',
        //added
		files: {
            assets: 'docs' // This will save assets to /doc instead of /build
        },
		prerender: {
            enabled: false,
        },
        //added
		
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		}),
		//??
		paths: {
			 base: process.env.NODE_ENV === "production" ? "/svkit1" : "",
			 },
		//??
		//precompress: false,
		//strict: false
	}
};

export default config;
