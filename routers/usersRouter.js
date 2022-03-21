import Router from "express";
import userController from '../controller/userController.js'

const router = Router();


router.route('/register')
    .post(userController.register);

router.route('/login')
    .get(userController.login);

export default router;