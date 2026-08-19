const express = require("express");

const app = express();


let port = 3000;

let user = [
    {
        name: "pol",
        age: 34,
    },

]

app.get('/' ,(req, res) => {
    res.send(user);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});