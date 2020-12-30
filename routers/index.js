var express = require('express');
var router = express.Router();
var fs = require('fs');
var unirest = require('unirest');

/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readFile('./public/index.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write("File not found");
        }
        else {
            res.write(data);
        }
    })


    var apiCall = unirest("GET", "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/");

    apiCall.headers({
        "x-rapidapi-key": "e4caefe61cmshc323d646f82f86cp193f10jsn415c9cc518fd",
        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
        "useQueryString": true
    });

    apiCall.end(function (result) {

        if (res.error) throw new Error(result.error);

        console.log(result.body);

    });
});

module.exports = router;
