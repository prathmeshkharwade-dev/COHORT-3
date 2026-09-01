import Imagekit from "imagekit"


const storageInstance = new Imagekit({
    urlEndpoint:process.env.IMGK_URL,
    publicKey:process.env.IMGK_PUBLIC_KEY,
    privateKey:process.env.IMGK_PRIVATE_KEY
})



export const sendFiles = async (file,fileName)=> {
    const obj = {
        file,
        fileName,
        folder:'cohort-3'
    }
    return await storageInstance.upload(obj)
}