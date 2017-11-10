var express = require('express');
var router = express.Router();
var database = require('../database/database.js');

var getMails = function (param, callback) {
	database.mails
		.all({attributes: ['name', 'content']})
		.then(mails => {
			param.mails = [];
			mails.forEach(function (value) {
				param.mails.push(value.dataValues);
			});
		})
		.then(function () {
			callback(param);
		});
}

router.get('/', function(req, res, next) {
	var currentUrl = req.protocol + '://' + req.get('host') + "/mails";
	getMails({url : currentUrl}, function (param) {
		param.title = param.mails[0].name;
  		sendResponse(res, 'mail', param);
	});
});

router.get('/:name', function(req, res, next) {
	var currentUrl = 
		req.protocol + '://' + req.get('host') + "/mails";
	getMails({url : currentUrl}, function (param) {
		param.title = req.params.name;
  		sendResponse(res, 'mail', param);
	});
});


function sendResponse (res, render, param) {
	res.render(render, param);
}

module.exports = router;
