import { cloudflare } from '@cloudflare/vite-plugin';
import { sites } from '@openai/sites-vite-plugin';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'vite';

const staticWorker = {
  name: 'static-worker-entrypoint',
  enforce: 'post',
  async closeBundle() {
    await mkdir('dist/server', { recursive: true });
    await writeFile(
      'dist/server/index.js',
      `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
      'utf8',
    );

    const wranglerPath = 'dist/wrangler.json';
    const wrangler = JSON.parse(await readFile(wranglerPath, 'utf8'));
    wrangler.main = 'server/index.js';
    wrangler.assets = { ...wrangler.assets, directory: '.', binding: 'ASSETS' };
    await writeFile(wranglerPath, `${JSON.stringify(wrangler)}\n`, 'utf8');
  },
};

export default defineConfig({
  plugins: [sites(), cloudflare(), staticWorker],
});
