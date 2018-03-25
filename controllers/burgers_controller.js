var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function (request, response) {
    burger.getTable(function (data) {
        console.log('get table ' + JSON.stringify(data));
        response.render('index', { burgers: data });
    });
});

router.post('/api/burgers', function (request, response) {
    burger.add(request.body.name, function (data) {
        response.json(response);
    });
});

router.put('api/burgers/:id', function (request, response) {
    burger.devour(request.params.id, function (data) {
        response.json(response);
    });
});

module.exports = router;