const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');


const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = next({dir: '.', dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(helmet());
    server.use(compression());

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
