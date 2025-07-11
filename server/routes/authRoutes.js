import express from 'express'
import { logout, login, register } from '../controller/authController.js';


const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);


export default authRouter;