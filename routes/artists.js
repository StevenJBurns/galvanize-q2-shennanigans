var express = require('express');
var router = express.Router();

router.get('/artists', (req, res, next) => {
  res.render('artists', { artists: "All Artists" });
});

router.get('artists/:id', (req, res, next) => {
  res.render('artists', { artists: "Artist ID :" });
});

router.post('/artists/:id'), (req, res, next) => {

}

router.patch('/artists/:id'), (req, res, next) => {

}

router.delete('/artists/:id'), (req, res, next) => {

}

module.exports = router;
