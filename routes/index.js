var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: "Express" });
});

router.post('/'), (req, res, next) => {

}

router.patch('/'), (req, res, next) => {

}

router.delete('/'), (req, res, next) => {

}

module.exports = router;
