const express = require('express');
const connectDB = require('./config/db');
const NotesModel = require("./models/notes.model");
const createNotesController = require('./controllers/notes.controller');

const app = express();

    connectDB();

app.use(express.json());

app.get("/", (req ,res) => {
    res.send("ok got it");
});

app.post('/create', createNotesController );

module.exports = app;