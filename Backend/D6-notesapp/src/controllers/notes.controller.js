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
        })
        
    } catch (error) {
        console.log("error in creation", error);
    }
}

module.exports = createNotesController;