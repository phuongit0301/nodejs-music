/**
 * Created by phan on 12/24/2015.
 */
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
    res.render('files', { title: 'Upload File' });
});

app.get('/upload', function(req, res, next) {
	res.send(13);
});


module.exports = router;