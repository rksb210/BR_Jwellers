const responseHandler = (res,statusCode,success,message,data)=>{
    const response = {
      success,
      statusCode,
      message,
      data
    }
    res.status(statusCode).json(response)
  }
  
  export default responseHandler