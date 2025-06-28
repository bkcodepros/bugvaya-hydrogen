import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {reactRouter} from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [hydrogen(), oxygen(), reactRouter(), tsconfigPaths()],
  build: {
    assetsInlineLimit: 0,
  },
  ssr: {
    optimizeDeps: {
      include: ['cookie'],  // <-- add cookie here to pre-bundle for ESM
    },
    noExternal: ['cookie', 'react-router', '@shopify/hydrogen-react'],  // <-- prevent these from being externalized in SSR
  },
});
