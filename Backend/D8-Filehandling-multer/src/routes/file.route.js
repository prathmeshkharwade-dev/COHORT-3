const express = require("express");


const router = express.Router();

router.post("/", (req, res) => {
    try {
        
        res.status(200).json({
            message:"file recived successfully", 
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
        })
    }
})

module.exports = router;