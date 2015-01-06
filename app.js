var express = require('express');
var resource = require('express-resource');
var mongoose = require('mongoose');
var config = require('./config');

var app = express();

//konfigurace a spojeni s databazi
config.configure(app);
config.connect(app);


//controllery
var PageController = require('./app/controllers/PageController');

//API stranky
app.resource('pages', PageController, {base: '/api/', load: Page.findOneByUrl});

app.listen(process.env.PORT || 3000);
