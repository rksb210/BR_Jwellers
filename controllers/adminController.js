import adminService from "../services/adminService.js"
import responseHandler from "../utlis/responseHandler.js";
import { StatusCodes } from "http-status-codes"


export const category = async (req, res) => {
    console.log(req.body)
    const data = await adminService.category(req.body);
    return responseHandler(res, StatusCodes.CREATED, true, data.msg)
}

export const getCategory = async (req, res) => {
    console.log(req.body)
    const data = await adminService.getCategory(req.body);
    return responseHandler(res, StatusCodes.CREATED, true,"data fetch", data)
}

export const product = async (req, res) => {
    console.log(req.body)
    const data = await adminService.product(req.body);
    return responseHandler(res, StatusCodes.CREATED, true, data.msg)
}