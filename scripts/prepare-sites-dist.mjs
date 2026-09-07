import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const workerOutput = 'dist/sites_project';
const workerConfigPath = `${workerOutput}/wrangler.json`;
const workerEntryPath = `${workerOutput}/index.js`;

await mkdir('dist/server', { recursive: true });
await copyFile(workerEntryPath, 'dist/server/index.js');

const wrangler = JSON.parse(await readFile(workerConfigPath, 'utf8'));
delete wrangler.configPath;
delete wrangler.userConfigPath;
wrangler.main = 'server/index.js';
wrangler.assets = {
  ...wrangler.assets,
  directory: 'client',
};

await writeFile('dist/wrangler.json', `${JSON.stringify(wrangler)}\n`, 'utf8');
