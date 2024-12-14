import "dotenv/config";
import "express-async-errors";
import express from "express"
import userRoute from "./routes/userRoute.js"
import adminRoute from "./routes/adminRoute.js"
import UserModel from './models/userModel.js';
import AdminModel from './models/adminModel.js';
import ProductModel from './models/productModel.js';


// Call UserModel to ensure table creation
UserModel();
AdminModel()
ProductModel()


import bodyParser from "body-parser";
import cors from "cors"
import morgan from "morgan";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.json());


// UserModel();
// AdminModel()
app.use('/api', userRoute)
app.use('/api', adminRoute)

app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});