const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  title: String,
  description: String,
  bookInfo: String,
  meetingTime: String,
  gradingScale: [String],
  calendar: [String]
});

ClassSchema.query.bySection = function(name) {
  return this.where({section: name});
}

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;
