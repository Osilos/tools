var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
	var param = { title: 'test' };
	param.mails = ["test", "test2"];
  	sendResponse(res, 'mail', param);
});

router.get('/:name', function(req, res, next) {
	var param = { title: req.params.name };
	param.mails = ["test", "test2", "test3"];
  	sendResponse(res, 'mail', param);
});


function sendResponse (res, render, param) {
	res.render(render, param);
}

module.exports = router;
