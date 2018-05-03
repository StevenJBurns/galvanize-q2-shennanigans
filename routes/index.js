const express = require('express');
var router = express.Router();

const env = 'development';
const config = require('../knexfile.js')[env];
const knex = require('knex')(config);

router.get('/', (req, res, next) => {
  res.render('index', { title: "Artists and Albums" });
});

router.post('/'), (req, res, next) => {

}

router.patch('/'), (req, res, next) => {

}

router.delete('/'), (req, res, next) => {

}

module.exports = router;
