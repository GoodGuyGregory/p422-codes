var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function (req, res) {
    if (req.body.name) {
        console.log(req.body.name);
        console.table(req.body);
        res.status(204);
    } else {
        res.status(400);
    }
    res.end();
});

app.listen(8080, function () {
    console.log("Listening on 8080");
});
