import { Router } from "express";
import { createProductValidator } from "../validators/product.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js"
import { createProduct } from "../controller/product.controller.js";

import multer from "multer"

const upload = multer({storage: multer.memoryStorage()  })


const router = Router()

/**
 * @method product
 * @route /api/products/
 * @description creates the product an save its data into the DB, images will be store on imagekit.
 * @access seller
 *  req.body => { DataTransferItemList,desc:price: {amount,currency},size:[{size,stock},{size,stock}]} 
 */
router.post("/", authenticate, (req , res, next) => {
    if(req.user.role !== "seller") {
        return res.status(403).json({
            message: "user is not authorixe to create products"
        })
    }
    next()
}, upload.array("images"), createProduct)


export default router