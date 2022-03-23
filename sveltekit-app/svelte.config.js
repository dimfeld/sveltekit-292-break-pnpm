import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
          vite: () => ({
            ssr: {
              // external: ['a_lib']
            }
          })
	}
};

export default config;
