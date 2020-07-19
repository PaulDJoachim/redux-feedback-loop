const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.post('/', (req, res) => {
  const newItem = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
      VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [newItem.feeling, newItem.understanding, newItem.support, newItem.comments])
    .then((result) => {
      console.log(`Added feedback to the database`, newItem);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    })
})


module.exports = router;
