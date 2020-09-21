// IMPORTS:
let express = require('express');
let fileSystem = require('fs');
let bodyParser = require('body-parser');

//  sets Routes
let routes = express.Router();

//  Working Dir Configuration:
const main = './html/index.html';

var app = express();

//  TESTING CONFIGURATION
// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

//  Components for # 1
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

// Components for # 2
let aboutObject = {
    name: "Greg Witt",
    email: "goodguygregory@gmail.com",
    musician: "Khurangbin"
}

let aboutPage = {
    numberTwo: (req, res) => {
        res.json(aboutObject);
        return;
    }
}

// Components for # 3 
passwords = {
    generateLength: (req, res) => {
        let desiredlength = req.params.length;
        // generate password:
        let generatedPassword = '';
        let passChars = 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
        // Checks if there is a parameter in the request
        if (desiredlength) {
            for (let i = 0; i <= desiredlength; i++) {
                let passCharIndex = Math.floor(Math.random() * passChars.length + 1);
                generatedPassword += passChars.charAt(passCharIndex);

            }
            res.send(generatedPassword);
            return;
        }
        res.sendStatus(404);
        res.send('specific length not found');
        return;
    },
    checkPassword: (req, res) => {
        let body = req.body;
        let validity = false;

        //  check for password
        if (!body['password']) {
            res.status(411);
            res.json({ error: "Need password for POST" });
            return;
        }

        if (body['password'].length >= 8) {
            console.log("password is greater than 8");
            let numberREGEX = /\d+/;
            if (numberREGEX.test(body['password'])) {
                console.log("password also contains numbers")
                validity = true;
            }

        }

        res.status(204);
        console.table(body);

        res.json();
        return;
    }
}


// 1. SERVE INDEX.HTML's CONTENTS
routes.get('/', indexPage.numberOne);

// 2. SERVE JSON RESPONSE WITH REQUIRED INFO
routes.get('/about', aboutPage.numberTwo);

// 3. ACCEPT HTTP GET REQUEST FOR /PASSWORD/GENERATE/:LENGTH
// RETURN A RANDOM PASSWORD OF SIZE LENGTH
routes.get('/password/generate/:length', passwords.generateLength);

// 4. VERIFIES THAT A PASSWORD IS:
// *  8 CHARS
// *  CONTAINS NUMBERS AND LETTERS
// RETURNS JSON WITH A "VALID" KEY OF TRUE OR FALSE
let jsonParser = bodyParser.json();

routes.post('/password', jsonParser, passwords.checkPassword);


let port = 8080;

//  sets routes
app.use('/', routes);

// adds body parser
app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Listening on http://%s", port);
});


