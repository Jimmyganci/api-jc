// import hapi type
import Hapi from '@hapi/hapi';
import path from 'path';
import { verifToken } from './src/plugins/authKeyApi';
// create router from ./routes/index
import routes from './src/routes';

// create server hapi localhost
const server = Hapi.server({
    host: (process.env.NODE_ENV === 'dev' && 'localhost') || '',
    port: process.env.PORT || 1234,
    routes: {
        files: {
            relativeTo: path.join(__dirname, 'static'),
        },
    },
});

server.ext('onPreAuth', verifToken, { sandbox: 'plugin' });
// create router
server.route(routes);

// start server
const init = async () => {
    await server.start();
    // eslint-disable-next-line no-console
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

init();
