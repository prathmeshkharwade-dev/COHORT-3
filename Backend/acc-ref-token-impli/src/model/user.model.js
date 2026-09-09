import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength: 3,
        maxLength: 50
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