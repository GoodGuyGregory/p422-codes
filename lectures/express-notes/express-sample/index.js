let express = require('express');
let routes = require('./lib/routes');

let port = 6061;

//  entrypoint into the server
let app = express();


app.use('/', routes);

//  sets port
app.listen(port, function () {
    console.log("Listening on http://%s", port);
});