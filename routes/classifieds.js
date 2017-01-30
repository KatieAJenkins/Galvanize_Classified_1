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
  // console.log('get by id connected');
  const id = req.params.id;

  knex('classifieds')
    .select('id' , 'title' , 'description' , 'price' , 'item_image')
    .where('id' , id)

  .then((results) => {
    res.send(results[0]);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/' , (req, res, next) => {
  console.log('post route connected');
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
