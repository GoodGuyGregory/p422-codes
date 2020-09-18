let express = require('express');
let companies = require('./controllers/companies');

//  this file could and needs to act as the controller for all possible routes

let routes = express.Router();

// router.get('/', (req, res) => {
//     return 'hello world';
// });

routes.get('/companies', companies.root);

// TODO create a Topology of URLS for the REST Service

//  returns details about the companies
routes.get('/companies/:companyName', companies.name);
// returns employees of the companies
routes.get('/companies/:companyName/employees', companies.employees);
// 
routes.route('/companies/:companyName/employees/:employeeName')
    .get(companies.singleEmployee)
    .put(companies.createEmployee)
    .delete(companies.removeEmployee)


//  exports all of our routes
module.exports = routes;