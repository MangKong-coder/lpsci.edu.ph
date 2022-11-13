import solid from "solid-start/vite";
import { defineConfig } from "vite";
import Icon from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    solid(),
    AutoImport({
      resolvers: [IconsResolver({
        prefix: 'Icon',
        extension: 'jsx'
      })]
    }), Icon({
      compiler: 'solid',
      autoInstall: true
    })
  ],
});
