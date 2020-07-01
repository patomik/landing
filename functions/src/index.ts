import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/shop-universal/server/main`).app;

export const ssr = functions.https.onRequest(universal);

// const angularUniversal = require('angular-universal-express-firebase');
// exports.trigger = angularUniversal.trigger({
//   index: `${process.cwd()}/dist/shop-universal/public/index.html`,
//   // make sure this points at the correct hash, or use the --output-hashing none flag on your ng build.
//   main: `${process.cwd()}/dist/shop-universal/server/main`,
//   enableProdMode: true,
//   cdnCacheExpiry: 600, // cache in the CDN for 10 minutes
//   browserCacheExpiry: 300, // cache in the browser for 5 minutes
//   staleWhileRevalidate: 120 // serve a stale version for 2 minutes after cdnCacheExpiry, but refresh CDN in background
// });
