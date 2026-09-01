import express from "express";
import dotenv from "dotenv";
dotenv.config();
import postRougtes from "./routes/post.route.js"
const app = express()


app.use(express.json())

app.use('/api/post',postRougtes)

export default app;