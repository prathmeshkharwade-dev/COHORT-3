import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength: [3, "Name must be 3 Character Long"],
        maxLength: [50, "Name must be at 50 Character Long"]
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    refreshToken: {
        type: String,
    }
})

const userModel = mongoose.model("users", useSchema)

export default userModel