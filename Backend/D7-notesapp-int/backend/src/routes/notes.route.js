const express = require("express");
const {
     createNotesController,
     getAllNotesController, 
     getSingleNoteController,
     updatedNotesController,
     deletedNoteController} = require("../controllers/notes.controller");


const router = express.Router();


 // CREATE

router.post("/create", createNotesController);

//READ
router.get("/allNotes", getAllNotesController);

// READ ONE
router.get('/:id',getSingleNoteController);


//UPDATE VIA PUT
router.put("/:id", updatedNotesController)

// DELETE
router.delete("/:id", deletedNoteController)

module.exports = router;