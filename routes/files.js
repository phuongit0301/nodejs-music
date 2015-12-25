/**
 * Created by phan on 12/24/2015.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
    res.render('files', { title: 'Upload File' });
});

app.post('/files', function(req, res, next) {
    alert(123);
    res.send('test post');
});


module.exports = app;