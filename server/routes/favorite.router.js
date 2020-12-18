const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText = `SELECT * from favorite`;
  pool.query(sqlText)
  .then(result => {console.log(result.rows); res.send(result.rows)})
  .catch(error => {console.log('error retrieving favorite giphys', error)})
});

// add a new favorite 
router.post('/', (req, res) => {
  const gifToAdd = req.body;
  console.log('adding new GIF to DB......', gifToAdd);
  // sql query
  let queryText = `INSERT INTO favorite (url)
                   VALUES ($1);`;
  pool.query(queryText, [gifToAdd]).then(result => {
    res.sendStatus(201);
  }).catch(error => {
    console.log('Error adding new feedback....', error);
    res.sendStatus(500);
  })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
