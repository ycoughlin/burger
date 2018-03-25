var orm = require('../config/orm.js');

var burger = {
    getTable: function (cb) {
        orm.selectAll('burgers').then(function (result) {
            console.log(result);
            cb(result); 
        }, function (err) {
            console.log(err);
        });
    },
    add: function (name, cb) {
        orm.insertOne(name, false).then(function (result) {
            console.log(result);
            cb(result);
        }, function (err) {
            console.log(err);
        });
    },
    devour: function (id, cb) {
        orm.updateOne('devoured', true, 'id', id).then(function (result) {
            console.log(result);
            cb(result);
        }, function (err) {
            console.log(err);
        });
    }
};

module.exports = burger;