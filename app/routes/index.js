const express = require('express');
const productRoute = require('../controller/controllerProduct');
const userRoute = require('../controller/controllerUser');
const loginRoute = require('../controller/controllerLogin');
const authMiddleware = require('../middlewares/auth.middleware');
const {runValidation, userValidation, productValidation} = require('../middlewares/validation')
const router = express.Router();

//Login
router.post('/login', loginRoute.login);

//User
router.post('/user/register', userValidation, runValidation, userRoute.insertUser);
router.get('/user/:id', authMiddleware.isAuthenticate, userRoute.listUser);
router.put('/user/update/:id', authMiddleware.isAuthenticate, userRoute.updateUser);
router.delete('/user/delete/:id', authMiddleware.isAuthenticate, userRoute.deleteUser);


//Product
router.post('/product/input', runValidation, productValidation, authMiddleware.isAuthenticate, productRoute.insertProduct);
router.get('/product/list/:id', authMiddleware.isAuthenticate, productRoute.listProduct);
router.put('/product/update/:id', authMiddleware.isAuthenticate, productRoute.updateProduct);
router.delete('/product/delete/:id', authMiddleware.isAuthenticate, productRoute.deleteProduct);


module.exports = router;