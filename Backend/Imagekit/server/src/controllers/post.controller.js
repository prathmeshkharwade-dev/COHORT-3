import postModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

export const createPost = async (req, res) => {
    try {
        const { caption } = req.body;
        const file = req.file;

        if (!caption || !file) {
            return res.status(400).json({
                success: false,
                message: "field are required"
            });
        }

        const uploadImage = await sendFiles(file.buffer, file.originalname);

        const post = await postModel.create({
            caption,
            image: uploadImage.url
        });

        return res.status(201).json({
            success: true,
            message: "post created successfully",
            post
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating the post"
        });
    }
};

export const getAllpost = async (req,res)=>{
    const post = await postModel.find()

    return res.status(200).json({
        success:true,
        message:"post fetched scussfully",
        post
    })
}