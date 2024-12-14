import express from "express"
import { category, getCategory, product } from "../controllers/adminController.js";
import validateData from "../middlewares/validateData.js"
import adminSchema from "../validations/adminSchema.js";

const router = express()

router.post('/category', validateData(adminSchema.category, "body"), category);
router.get('/getCategory', getCategory);

router.post('/product', validateData(adminSchema.product, "body"), product);


export default router