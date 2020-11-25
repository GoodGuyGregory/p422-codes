const express = require('express');
const classes = require('./controllers/classes');
const assignmensts = require('./controllers/assignments');

let routes = express.Router();

routes.route('/classes')
  .get(classes.root)

routes.route('/classes/:class')
  .get(classes.byClass)

routes.route('/assignments/:class')

routes.route('/assignments/:class/:assignment')

module.exports = routes;
