import { api } from "../../../app/config/api"

export const loginUserApi =  async (credentials) => {
    try {

        let res = await api.post("/auth/login", credentials);
        console.log("response fro login api", res);
        
    } catch (error) {
        console.log("error in login api", error)
        
    }
}