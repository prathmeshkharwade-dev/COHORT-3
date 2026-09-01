import express, { Router } from "express";
import { upload } from "../config/multer.config.js";
import { createPost, getAllpost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", upload.single("image"),createPost);

router.get("/getAllpost",getAllpost);

export default router;
