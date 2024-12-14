import responseHandler from "../utlis/responseHandler.js";


//used in server.js

const errorHandlerMiddleware = (err,req,res,next)=>{
    const customError = {
        statusCode:err.statusCode || 500,
        msg:err.message || "Something went wrong, Please try after some time"
    }
    return responseHandler(res,customError.statusCode,false,customError.msg)
}

export default errorHandlerMiddleware