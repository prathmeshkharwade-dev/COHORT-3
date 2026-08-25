const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
        minlength: [20, "min 20 Char are required"],
    },
});


const NotesModule = mongoose.model("notes", notesSchema);

module.export = NotesModule;