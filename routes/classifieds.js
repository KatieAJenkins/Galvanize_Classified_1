'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');

router.get ('/' , (req, res, next) => {
  // console.log('get route connected!');

  knex('classifieds')
    .select ('id', 'title' , 'description' , 'price' , 'item_image')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/:id' , (req, res, next) => {
  console.log('get by id connected');
  //
  // knex('classifieds')
  //
  // .then((results) => {
  //   res.send(results);
  // })
  // .catch((err) => {
  //   next(err);
  // });
});


module.exports = router;
