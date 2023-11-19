import express from 'express';
import signup from '../controllers/user/signup.js';

const userRoutes = express.Router();

userRoutes.post('/signup', signup);


export default userRoutes;