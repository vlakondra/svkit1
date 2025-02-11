// import adapter from "@sveltejs/adapter-node"; // Updated import
import adapter from "@sveltejs/adapter-static";

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

//move .svelte-kit\output\* docs\
//copy build\* docs\

/** @type {import('@sveltejs/kit').Config}    outDir*/
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			//output ? outDir: 'docs', 
			fallback: '200.html'
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/svkit1" : "",
		},
	}
};

export default config;
