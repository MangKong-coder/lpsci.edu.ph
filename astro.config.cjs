import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  output: "server",
  adapter: vercel()
});