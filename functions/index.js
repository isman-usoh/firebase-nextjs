// ./functions/index.js
const functions = require('firebase-functions');
const next = require('next');
const app = next({ dev: false, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((request, response) => {
    console.log('[Function] RequestUrl', request.originalUrl);
    return app.prepare().then(() => handle(request, response));
});
