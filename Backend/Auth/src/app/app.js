import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.status(200).json({
        message: "Welcome to Authentication Api"
    })
})


export default app;