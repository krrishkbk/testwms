var Hapi = require('hapi');
var models = require('./models');
var config = require('./config/server_settings');
var routes = require('./api/routes');

GLOBAL.server = new Hapi.Server();

server.connection(config);

for (var i = 0; i < routes.length; i++) {
    server.route(routes[i]);
}

server.start(err => {
    if (err) {
        console.error('Error was handled!');
        console.error(err);
    }
    console.log(`Server started at ${server.info.uri}`);
});
