const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { sendQuery } = require("../databases/mysqldb");
const SQL = require("@nearform/sql");

// Get movie by ID
router.get("/:id", async (req, res, nextStep) => {
  try {
    const movieId = req.params.id;
    const chosenMovie = await sendQuery(
      SQL`SELECT * FROM movies WHERE id = ${movieId}`
    );
    res.send(chosenMovie);
  } catch (error) {
    nextStep(error);
  }
});

module.exports = router;
