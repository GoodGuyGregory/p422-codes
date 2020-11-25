const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  description: String,
  rubric: [String]
});

AssignmentSchema.query.bySection = function(name) {
  return this.where({section: name});
}

const Assignment = mongoose.model('Class', AssignmentSchema);

module.exports = Assignment;
