const mongoose = require('mongoose');

const SubmissionSchema = mongoose.Schema({
    section: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    answers: [String],
    uploads: Buffer
});


const Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = Submission;
