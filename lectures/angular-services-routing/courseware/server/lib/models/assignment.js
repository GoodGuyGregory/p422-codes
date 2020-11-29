const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
  section: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  rubric: [String],
  questions: [String]
});

AssignmentSchema.query.bySection = function (name) {
  return this.where({ section: name });
}


AssignmentSchema.query.bySectionAndName = function (section, name) {
  return this.where({ section: section, name: name });
}

const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = Assignment;
