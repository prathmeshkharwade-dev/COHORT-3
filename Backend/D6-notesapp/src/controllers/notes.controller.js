const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, discription } = req.body;

    let newNote = await NotesModel.create({
      title,
      discription,
    });

    return res.status(201).json({
      message: "Note create Scussfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();

    res.status(200).json({
      message: "all notes fedtched",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    let note = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "Note fetches Scussfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updatedNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Note updated Scussfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deletedNoteController = async (req, res) => {
    try {
        
        let noteId = req.params.id;

        await NotesModel.findByIdAndDelete(noteId);
        
        return res.status(200).json({
            message: "Note updated Scussfully",
        });
        

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNotesController,
  deletedNoteController,
};
