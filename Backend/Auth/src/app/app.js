import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to Authentication Api",
  });
});


app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email, name, password
  })

  const token = jwt.sign(
    {
      id: user._id
    },
    "daa7f6a48a4036a54ead56dddea444bddf82e5e41675794892c778188c26f7a9",
  )

  res.status(201).json({
    message:"User Create Successfully",
    data: {
        user: {
          email,
          name,
          id:user._id
        },
        token
    }
  })
});


app.get("/api/auth/me", async (req , res)=> {
  const authHeader = req.headers.authorization;

  console.log(authHeader);
}
  )


export default app;
