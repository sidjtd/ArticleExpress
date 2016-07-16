const exp = require('express');
const Router = Express.Router();

const NumberModel = require('./db/number.js');

Router.get('/', (req, res) => {

  NumberModel.getAll((err, numbersInDb) => {

    if (err) { res.status(500).send(err);

    return res.render('index', {
      numbers: numbersInDb
    });
    }
  });

}

// '/numbers/:id'
Router.get('/:id', (req, res) => {
  NumberModel.getById( req.params.id, function (err, number) {
    if (err) {
      return res.send(err);
    }
    return res.send(number);
  });
});