import ImageKit, { toFile } from "@imagekit/nodejs"
import dotenv from "dotenv"
dotenv.config()

const storageInstance = new ImageKit({
    privateKey: process.env.IMGK_PRIVATE_KEY,
})

export const sendFiles = async (file, fileName) => {
    return await storageInstance.files.upload({
        file: await toFile(file, fileName),
        fileName,
        folder: 'cohort-3'
    })
}