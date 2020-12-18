const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const api_key = process.env.GIPHY_API_KEY;
const baseURL = 'http://api.giphy.com/v1/gifs/search?api_key=';

router.get('/:term', (req, res) => {
  let term = req.params.term;
  let termURL = `&q=${term}&limit=10&lang=en`;
  if (term.length > 0) {
    let finalURL = baseURL + api_key + termURL;
    axios
      .get(finalURL)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.sendStatus(500);
        console.error('Error fetching gifs from searchL ', error);
      });
  } else {
    res.sendStatus(406);
    console.error('Error searching for gif: ', error);
  }
});

module.exports = router;
