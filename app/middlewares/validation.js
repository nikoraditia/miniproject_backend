const { check, validationResult} = require('express-validator');

exports.runValidation = (req,res,next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(404).json({
            status: false,
            massage: errors.array()[0].msg
        })
    }
    next();
}

exports.userValidation = [
    check('name', 'name cant be empty').notEmpty().isLength({min: 3}).withMessage('your name is too short'),
    check('password', 'password cant be empty').notEmpty().isLength({min: 6}).withMessage('your password is to short'),
    check('address', 'address cant be empty').notEmpty(), 
    check('phone_number', 'phone_number cant be empty').notEmpty().isNumeric().withMessage('only can input number'), 
] 

exports.productValidation = [
    check('name', 'name cant be empty').notEmpty().isLength({min: 3}).withMessage('product name is too short'),
    check('quantity', 'quantity cant be empty').notEmpty().isLength({min: 1}).isNumeric().withMessage('only can input number'),
    check('price', 'price cant be empty').notEmpty().isLength({min: 3}).withMessage('your name is too short').isNumeric(),
]

