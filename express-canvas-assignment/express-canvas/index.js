// IMPORTS:
let express = require('express');
let fileSystem = require('fs');

//  sets Routes
let routes = express.Router();

//  Working Dir Configuration:
let main = './html/index.html';

var app = express();

//  TESTING CONFIGURATION
// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

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

let aboutObject = {
    name: "Greg Witt",
    email: "goodguygregory@gmail.com",
    musician: "Khurangbin"
}

aboutPage = {
    numberTwo: (req, res) => {

        res.json(aboutObject);
        return;
    }
}

// 1. SERVE INDEX.HTML's CONTENTS
routes.get('/', indexPage.numberOne);
// 2. SERVE JSON RESPONSE WITH REQUIRED INFO
routes.get('/about', aboutPage.numberTwo);

// }

let port = 8080;

//  sets port
app.use('/', routes);

app.listen(port, function () {
    console.log("Listening on http://%s", port);
});


