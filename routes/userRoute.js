import express from "express"
import { users, login, getCustomer } from "../controllers/userController.js";
import validateData from "../middlewares/validateData.js"
import authSchema from "../validations/authSchema.js";

const router = express()

router.post('/registration', validateData(authSchema.user, "body"), users);
router.post('/login', validateData(authSchema.user, "body"), login);

router.get('/getCustomer',  getCustomer);

export default router