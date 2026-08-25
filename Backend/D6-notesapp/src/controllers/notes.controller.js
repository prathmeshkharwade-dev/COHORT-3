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
};

const getAllNotesController = async (req,res) => {
    try {

        const allNotes = await NotesModel.find();

        res.status(200).json({
            message: "all notes fedtched",
            data: allNotes,
    });
        
    } catch (error) {
        console.log("error in get notes api", error );
        
    }
}

module.exports = {
    createNotesController, getAllNotesController,
};