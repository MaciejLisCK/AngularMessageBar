
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8335, hash: '4eedb95fc373bfbfaf89c359e7e7f392044a0d1b788d4b78b5ce871bdbe51718', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8667, hash: 'cd4f11b54755d0ebbbf43148e01983b81128b7c038c253e7921db35883db7a71', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15758, hash: '4dcd1b5014e84218362611202c6eb8694a26e67e7909762d3c55fd102d4c9dc3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KCDCR25B.css': {size: 358, hash: 'ylKdEPXhHqo', text: () => import('./assets-chunks/styles-KCDCR25B_css.mjs').then(m => m.default)}
  },
};
