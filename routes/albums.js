var express = require('express');
var router = express.Router();

router.get('/albums', (req, res, next) => {
  res.render('albums', { albums: "All Albums" });
});

router.get('/albums/:id', (req, res, next) => {
  res.render('albums', { albums: "Album ID :" });
});

router.post('/albums'), (req, res, next) => {

}

router.patch('/albums/:id'), (req, res, next) => {

}

router.delete('/albums/:id'), (req, res, next) => {

}

module.exports = router;
