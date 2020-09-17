const https = require('https');

//  for web servers
const fs = require('fs');
const http = require('http');
const url = require('url');

//  express example
const express = require('express');

function gitIgnore() {
    const url = 'https://www.toptal.com/developers/gitignore/api/'

    https.get(url + 'node,vim,windows,macos,intellij+all', (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
            console.log('failure has occured');
            return;
        }

        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk });
        res.on('end', () => {
            console.log(rawData);
        });
    });
}

function kanyeQuote() {
    https.get('https://api.kanye.rest', (res) => {
        if (res.statusCode !== 200) {
            console.error('Error, status code %d', res.statusCode);
            return;
        }

        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk
        });
        res.on('end', () => {
            console.log(rawData);
        });

    });
}

function httpServerManually() {
    //  Web Server Service
    let ROOT = 'html/';

    let server = http.createServer((req, res) => {
        console.log(req.url);

        let reqURL = new URL(req.url, `http://${req.headers.host}`);

        let filePath = reqURL.pathname;

        if (filePath.endsWith('/')) {
            filePath += 'index.html';
        }

        fs.readFile(ROOT + filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                //  reutrns error to the user
                res.end(JSON.stringify(err));
                return;
            }

            res.writeHead(200);
            res.end(data);
        });

    });

    server.listen(4545);
}

//  creates an express server
let app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express');
})

// listens on a specified port number
app.listen(4545);
