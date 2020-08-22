
const joi = require("@hapi/joi");
const registerValidation = data => {
    const schema = joi.object({
        name: joi
            .string()
            .min(3)
            .required(),

        email: joi
            .string()
            .min(6)
            .required()
            .email(),

        password: joi
            .string()
            .min(6)
            .required(),
        institute: joi
                .string()
                .min(2)
                .required(),
        location: joi
                .string()
                .min(6)
                .required(),
    });
    return schema.validate(data);
};

const loginValidation = data => {
    const schema = joi.object({
        email: joi
            .string()
            .min(6)
            .required()
            .email(),

        password: joi
            .string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};
const instituteValidation = data => {
    const schema = joi.object({
        user_id: joi.any(),
        name: joi
            .string()
            .min(3)
            .required(),
        location: joi
            .string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};
const courseValidation = data => {
    const schema = joi.object({
        user_id: joi.any(),
        institute:joi
            .string()
            .min(3)
            .required(),
        name: joi
            .string()
            .min(3)
            .required(),
        category:joi
            .string()
            .min(3)
            .required(),
        level:joi
            .string()
            .min(3)
            .required(),
        description:joi
            .string()
            .min(3)
            .required(),
        duration:joi
            .string()
            .min(3)
            .required(),
        cost:joi
            .string()
            .min(3)
            .required(),
        payments:joi
            .string()
            .min(3)
            .required(),
        scholarships:joi
            .string()
            .min(3),
        qualifications:joi
            .string()
            .min(3),
        content:joi
            .string()
            .min(3),
        enrollments:joi
            .string()
            .min(3),
        contacts:joi
            .string()
            .min(3)
            .required(),
        further:joi
            .string()
            .min(3),
        career:joi
            .string()
            .min(3),
    });
    return schema.validate(data);
};
const adminValidation = data => {
    const schema = joi.object({
        name: joi
            .string()
            .min(3)
            .required(),

        email: joi
            .string()
            .min(6)
            .required()
            .email(),

        password: joi
            .string()
            .min(6)
            .required(),
    });
    return schema.validate(data);
};
const imageValidation = data =>{
    const schema = joi.object({
        user_id: joi.any(),
        image:joi.string(),
    });
    return schema.validate(data);
}

const categoryValidation = data =>{
    const schema = joi.object({
        name: joi
            .string()
            .min(3)
            .required(),
    });
    return schema.validate(data);
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.instituteValidation =instituteValidation;
module.exports.courseValidation =courseValidation;
module.exports.adminValidation =adminValidation;
module.exports.imageValidation = imageValidation;
module.exports.categoryValidation = categoryValidation;
