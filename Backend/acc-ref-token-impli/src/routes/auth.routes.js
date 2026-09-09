import { Router } from "express";
import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";

const router = Router();


/**
 * @POST 
 */

router.post("/register", async (req, res) => {
    
    const { name , email, password } = req.body

    const isUserExists = await userModel.findOne({ email })

    if (isUserExists) {
        return req.statusCode(400).json({
            Message: "User already exist",
            errors: {
                field: "email",
                message: "User already exists"
            }
        })
    }

    const user = await userModel.create({
        name,
        email,
        passwordHash: await bcrypt.hash(password, 12)
    })


})

export default router;