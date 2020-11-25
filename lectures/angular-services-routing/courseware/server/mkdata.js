const mongoose = require('mongoose');
const Class = require('./lib/models/class');

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

mongoose.connect('mongodb://localhost:27017/courseware', { useNewUrlParser: true, useUnifiedTopology: true });

p422.save().catch(err => console.error(err)).then(() => { console.log('saved p422') });
c311.save().catch(err => console.error(err)).then(() => { console.log('saved c311') });
