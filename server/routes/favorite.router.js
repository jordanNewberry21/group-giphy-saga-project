const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText = `SELECT * from favorite`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error retrieving favorite giphys', error);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  const gifToAdd = req.body.url;
  let queryText = `INSERT INTO favorite (url)
                   VALUES ($1);`;
  pool
    .query(queryText, [gifToAdd])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error adding new feedback....', error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const giphId = req.params.id;
  console.log(giphId);
  let sqlText = `UPDATE favorite 
                  SET category_id = $1
                  WHERE id=$2`;
  pool
    .query(sqlText, [req.body.category_id, giphId])
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log('Error changing category, id', error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  let sqlText = `DELETE FROM favorite WHERE id=$1`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error from db: ', error);
      res.sendStatus(500);
    });
});

module.exports = router;
