import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: 'build-static',
            assets: 'build-static',
            fallback: undefined,
            precompress: false,
            strict: true
        })
	}
};
export default config;