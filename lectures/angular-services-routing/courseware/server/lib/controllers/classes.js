const Class = require('../models/class');

module.exports = {
  root: (req, res) => {
    Class.find().exec((err, classes) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let klass of classes) {
        ret.push(klass.section);
      }
      res.json(ret);
    })
  },
  byClass: (req, res) => {
    const section = req.params.class;

    Class.findOne().bySection(section).exec((err, klass) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!klass) {
        res.status(404);
        res.json({'err': 'class not found'});
        return;
      }
      console.log('sending class: ' + klass)
      res.json(klass);
    })
  }
}
