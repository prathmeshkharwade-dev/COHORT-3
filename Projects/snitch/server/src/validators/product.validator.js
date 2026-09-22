import { body } from "express-validator"

export const createProductValidator = [
    body("title")
    .exists().withMessage("Title is required").bail()
    .isString().withMessage("Title is must be a string").bail()
    .trim()
    .isLength({ min: 2, max: 100 }).withMessage("Title length must be between 2 to 100 characters")
    .isAlpha()
]