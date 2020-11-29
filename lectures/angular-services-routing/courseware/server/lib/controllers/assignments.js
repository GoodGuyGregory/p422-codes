const Assignment = require("../models/assignment");
const Submission = require('../models/Submission');

module.exports = {
    details: function (req, res) {
        const section = req.params.class;
        const name = req.params.assignment;
        Assignment.findOne().bySectionAndName(section, name).exec((err, assignment) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(assignment);
        });
    },
    bySection: function (req, res) {
        // return all possible assignments from the model
        const section = req.params.class;
        Assignment.find().bySection(section).exec((err, assignments) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(assignments);
        });
    },
    submit: function (req, res) {
        const submission = new Submission(req.body);
        submission.save()
            .then(() => {
                res.sendStatus(204);
            })
            .catch(err => {
                res.status(400);
                res.json(err);
            });
    }
}