import express from 'express';
import { auth } from '../middlewares/Auth.js';
import { login, logout, register } from '../controllers/AuthController.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', auth, login);
authRouter.get('/logout', logout)

authRouter.get('/protected', auth, (req, res) => {
    if (req.session.user) {
        return res.status(200).send("Protected Route Test").end();
    }
    res.status(401).send("Access Denied");
});

export { authRouter };
