const router = require("express").Router();
const createNewNote = require("../../lib/notes.js");

const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);

  res.json(note);
});

module.exports = router;