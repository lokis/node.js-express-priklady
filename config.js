var express = require('express');
var mongoose = require('mongoose');

exports.configure = function (app) {
    app.configure(function () {
        app.use(logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.static(process.cwd() + '/public'));
        app.use(app.router);
    });
    app.configure('development', function () {
        app.set('db uri', 'mongodb://localhost:27017/zkouseniExpress');
    });
    app.configure('production', function () {
        app.set('db uri', 'mongodb://user:pass@host:port/dbname');
    });
}

exports.connect = function (app) {
    mongoose.connect(app.get('db uri'), function (err) {
        if (err) console.log(err);
    });
}