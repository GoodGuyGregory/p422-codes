//  imports companies to manipulate
let data = require('../../data/data');

module.exports = {
    root: (req, res) => {
        // res.send('hello world from companies');
        let names = [];
        for (let key in data.companies) {
            names.push(key);
        }
        // res.send(JSON.stringify(names, 2));
        // res.json returns a json object
        res.json(names);
    },
    name: (req, res) => {
        // req.params allows to access elements in the GET request 
        let name = req.params.companyName;
        if (data.companies.hasOwnProperty(name)) {

            res.json(data.companies[name]);
            return;
        }
        // for (let c of data.companies) {
        //     if (c.name === name);
        //     // res.send(JSON.stringify(c, null, 2));
        //     res.json(c);
        //     return;
        // }

        // sets status of the return if the name wasn't found
        res.status(404);
        res.send('not found');
    },
    employees: (req, res) => {
        let name = req.params.companyName;
        if (data.companies.hasOwnProperty(name)) {
            res.json(data.employees[name]);
            return
        }

        res.status(404);
        res.send('not found');
    },
    singleEmployee: (req, res) => {
        let companyName = req.params.companyName;
        let employeeName = req.params.employeeName;

        // must handle failures:
        if (!data.employees.hasOwnProperty(companyName)) {
            res.send(404);
            res.data('company not found');
        }

        for (let e of data.employees[companyName]) {
            if (e.name === employeeName) {
                res.json(e);
                return
            }
        }

        res.send(404);
        res.data('employee not found');
    },
    createEmployee: (req, res) => {

    },
    removeEmployee: (req, res) => {

    },
}

