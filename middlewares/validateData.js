import responseHandler from "../utlis/responseHandler.js"
import { StatusCodes } from "http-status-codes"

const validateData = (schema, property) => (req, res, next) => {
    const { error } = schema.validate(req[property])
    if (error) {
        return responseHandler(res, StatusCodes.BAD_REQUEST, false, error.details[0].message)
    }
    next()
}
export default validateData