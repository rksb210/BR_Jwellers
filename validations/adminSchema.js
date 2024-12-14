import Joi from  "joi"

//joi is used for check type of body that comes from frontend

const adminSchema = {
    category:Joi.object().keys({
        category:Joi.string().required(),       
    }),

    product:Joi.object().keys({
        category:Joi.string().required(),
        productName:Joi.string().required(), 
        productDescription:Joi.string().required()      
    }),

}

export default adminSchema