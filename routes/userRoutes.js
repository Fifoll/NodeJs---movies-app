import express from 'express';
import signup from '../controllers/user/signup.js';
import login from '../controllers/user/login.js';

const userRoutes = express.Router();

userRoutes.post('/signup', signup);

userRoutes.post('/login', login);


export default userRoutes;