var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('upload', { title: 'File Upload'});
});
router.post('upload', function(req, res, next) {
	alert(123);
});
module.exports = router;