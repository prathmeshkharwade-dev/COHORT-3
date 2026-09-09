import { Router } from "express";
import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens } from "../utils/Auth.js";

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

    const { accessToken , refreshToken } = generateTokens({ userId: user._id})

    res.cookie("accessToken", refreshToken, {
        httpOnly: true,
    }) 

    res.status(201).json({
        message: "user registered successfully",
        data: {
            user: {
                name: user.name,
                email: user.email
            }
        },
        accessToken
    
    })

})

export default router;