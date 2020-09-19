// IMPORTS:
let express = require('express');
let fileSystem = require('fs');

//  sets Routes
let routes = express.Router();


// function appConfiguration() {
//  Working Dir Configuration:
let main = './html/index.html';

var app = express();

//  Testing Config
// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

// appConfiguration();
indexPage = {
    // 1. Serve an index.html file located in an 'html' directory for /
    numberOne: (req, res) => {
        fileSystem.readFile(main, (err, data) => {
            if (err) throw err;
            res.end(data);
        })

        return;
    },
}

routes.get('/', indexPage.numberOne);

// }

let port = 8080;

//  sets port
app.use('/', routes);

app.listen(port, function () {
    console.log("Listening on http://%s", port);
});


