import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'blog-page',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'vdPG2iz5Jr09oFfK5XF2LGTkndGZlX0OHtgE',
});