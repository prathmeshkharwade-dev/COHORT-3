const express = require('express');
const connectDB = require('./config/db');
const NotesModel = require("./models/notes.model");

const app = express();

    connectDB();

app.use(express.json());

app.get("/", (req ,res) => {
    res.send("ok got it");
});

app.post('/create', async (req, res) => {
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
})

module.exports = app;