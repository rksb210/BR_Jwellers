import Joi from  "joi"

//joi is used for check type of body that comes from frontend

const authSchema = {
    user:Joi.object().keys({
        email:Joi.string().required(),
        password:Joi.string().required(),
    }),

}

export default authSchema