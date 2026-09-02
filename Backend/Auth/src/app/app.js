import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to Authentication Api",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

  const token = jwt.sign(
    {
      email,
      name,
    },
    "daa7f6a48a4036a54ead56dddea444bddf82e5e41675794892c778188c26f7a9",
  )

  res.status(201).json({
    message:"User Create Successfully",
    data: {
        user: { email, name
        },
        token
    }
  })
});

export default app;
