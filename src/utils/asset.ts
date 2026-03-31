const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a public-folder path with the site base URL.
 *  e.g. asset('/kuda-1.png') → '/kudayu/kuda-1.png'
 */
export const asset = (path: string): string =>
  `${base}${path.startsWith('/') ? path : '/' + path}`;
