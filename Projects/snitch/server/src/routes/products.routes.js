import { Router } from "express";

const router = Router()

/**
 * @method product
 * @route /api/products/
 * @description creates the product an save its data into the DB, images will be store on imagekit.
 *  req.body => { DataTransferItemList,desc:price: {amount,currency},size:[{size,stock},{size,stock}]} 
 */




export default router