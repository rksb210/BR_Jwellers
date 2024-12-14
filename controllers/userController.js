import authService from "../services/authService.js"
import responseHandler from "../utlis/responseHandler.js";
import { StatusCodes } from "http-status-codes"


export const users = async (req, res) => {
    console.log(req.body)
    const data = await authService.users(req.body);
    return responseHandler(res, StatusCodes.CREATED, true, data.msg)
}

export const login = async (req, res) => {
    console.log(req.body)
    const data = await authService.login(req.body);
    return responseHandler(res, StatusCodes.CREATED, true, data.msg)
}

export const getCustomer = async (req, res) => {
    console.log(req.body)
    const data = await authService.getCustomer(req.body);
    return responseHandler(res, StatusCodes.CREATED, true, "data fetch", data)
}