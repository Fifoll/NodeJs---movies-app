import bcrypt from 'bcrypt';
import User from '../../models/user.js';

const encrypt = async (password) => {
    return await bcrypt.hash(password, 10);
}

const signup = async (req, res) => {
    try {
        const userToValidate = new User(req.body);
        await userToValidate.validate();
        const hashedPassword = await encrypt(req.body.password);
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.status = 200;
        res.send({
            success: true,
            message: `New user created`
        });
    }
    catch (err) {
        if (err.code === 11000) {
            res.status = 400;
            res.send({
                success: false,
                message: `User with email ${req.body.email} is already in data base`,
                status: res.status
            });
        } else if (err.name === 'ValidationError') {
            const validationErrors = {};
            for (const field in err.errors) {
                validationErrors[field] = err.errors[field].message;
            }
            res.status = 400;
            res.send({
                success: false,
                message: 'Validation error',
                status: res.status,
                errors: validationErrors,
            });
        } else {
            res.status = 500;
            res.send({
                success: false,
                message: err.message,
                status: res.status
            });
        }
    }
}

export default signup;