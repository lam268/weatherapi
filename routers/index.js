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
});

module.exports = router;
