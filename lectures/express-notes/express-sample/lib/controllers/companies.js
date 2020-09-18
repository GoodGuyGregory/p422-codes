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
            res.sendStatus(404);
            res.json('company not found');
            return
        }

        for (let e of data.employees[companyName]) {
            if (e.name === employeeName) {
                res.json(e);
                return
            }
        }

        res.sendStatus(404);
        res.json('employee not found');
    },
    createEmployee: (req, res) => {
        let companyName = req.params.companyName;
        let employeeName = req.params.employeeName;
        let body = req.body;

        // TEST CONNECTION CODE:
        // console.log(companyName);
        // console.log(employeeName);
        // console.log(body);

        if (body['name'] !== employeeName) {
            res.status(400);
            res.json({ error: "name does not match request employee name" });
            return;
        }

        if (!body['job']) {
            res.status(400);
            res.json({ error: "employee job not specified" });
            return;
        }

        if (!data.employees.hasOwnProperty(companyName)) {
            res.status(404);
            res.json('company not found');
            return;
        }

        data.employees[companyName] = data.employees[companyName].filter(value => { return value.name !== employeeName; });

        data.employees[companyName].push(body);
        res.sendStatus(204);
    },
    removeEmployee: (req, res) => {
        let companyName = req.params.companyName;
        let employeeName = req.params.employeeName;

        //  DEMO:
        // let a = [1, 2, 3];
        // filters all elements through that are not 1
        // a.filter((value => { value !== 1; }))

        if (!data.employees.hasOwnProperty(companyName)) {
            res.sendStatus(404);
            res.json('company not found');
            return
        }

        // makes a new array such as in the DEMO 
        data.employees[companyName] = data.employees[companyName].filter((value => { return value.name !== employeeName; }));

        res.sendStatus(204);
    },
}

