const express = require('express')

const app = express();

app.get("/", (req ,res) => {
    res.send("ok got it");
});

module.exports = app;