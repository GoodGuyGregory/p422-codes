const mongoose = require('mongoose');
const Class = require('./lib/models/class');
const Assignment = require('./lib/models/assignment');
const Submission = require('./lib/models/submission');

const p422 = new Class({
  section: 'P422',
  title: 'Web Enterprise Systems',
  description: 'Client/Server web technologies',
  gradingScale: [
    '90-100: A',
    '0-89: F'
  ],
  calendar: [
    '1: NodeJS',
    '2: Angular',
    '3: ???',
    '4: PROFIT!'
  ],
  bookInfo: 'Node.js, Mongo, and Angular Web Development',
  meetingTime: 'Tu/Th 10:00-12:00'
});

const c311 = new Class({
  section: 'C311',
  title: 'Programming Languages',
  description: 'Theory and construction of programming languages',
  gradingScale: [
    '90-100: A',
    '0-89: F'
  ],
  calendar: [
    '1: Functional Programming with F#',
    '2: Really, learn some F#',
    '3: Destroy them Financially',
    '4: Avoiding Contraction of Corona Virus'
  ],
  bookInfo: 'No book',
  meetingTime: 'Tu/Th 13:00-15:00'
});

const c311hw1 = new Assignment({
  section: c311.section,
  name: 'HW1',
  description: 'Beginning to F#',
  rubric: ['100%: all tests pass'],
  questions: [
    'What is the result of x for: `let x = 1+2;;`?',
    'What is the result of y for: `let f x = x+2;;\nlet y = f 3;;`?',
  ]
});

const c311hw2 = new Assignment({
  section: c311.section,
  name: 'HW2',
  description: 'Programming Patterns',
  rubric: ['100%: all tests pass'],
  questions: [
    'What is the result of x for: `let x = 1+2;;`?',
    'What is the result of y for: `let f x = x+2;;\nlet y = f 3;;`?',
  ]
});

mongoose.connect('mongodb://localhost:27017/courseware', { useNewUrlParser: true, useUnifiedTopology: true });

//  clear the DB 
async function save() {
  await Assignment.deleteMany();
  await Submission.deleteMany();
  await Class.deleteMany();

  // save course data to the db 
  await p422.save()
  await c311.save()

  // save assignments to the db
  await c311hw1.save()
  await c311hw2.save()

}

save().then(() => console.log('done'));