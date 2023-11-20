import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        const reqEmail = req.body.email;
        const user = await User.findOne({ email: reqEmail });
        if (user) {
            const passwordCheck = await bcrypt.compare(req.body.password, user.password);
            if (passwordCheck) {
                const token = jwt.sign({ email: user.email, userId: user._id }, 'mySecretKey', { expiresIn: '1h' });
                res.status = 200;
                res.send({
                    success: true,
                    message: 'Auth succesed',
                    token
                })
                return;
            }
        }
        res.status = 401;
        res.send({
            success: false,
            message: 'Auth failed',
            status: res.status
        })
        return;
    }
    catch (err) {
        res.status = 500;
        res.send({
            success: false,
            message: err.message,
            status: res.status
        });
    }
}

export default login;