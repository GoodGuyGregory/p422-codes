const express = require('express');
const classes = require('./controllers/classes');
const assignments = require('./controllers/assignments');

let routes = express.Router();

routes.route('/classes')
  .get(classes.root)

routes.route('/classes/:class')
  .get(classes.byClass)

routes.route('/assignments/:class')
  .get(assignments.bySection)

routes.route('/assignments/:class/:assignment')
  .get(assignments.details)
  .post(assignments.submit)

module.exports = routes;
