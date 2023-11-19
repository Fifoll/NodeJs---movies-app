import connectToDatabase from "../config/mongoConnection.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email not valid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "Password needs to have at least: one capital letter, one lowercase and one special sign"]
    },
}) 

const createModel = async () => {
    try {
        const dbConnection = await connectToDatabase();
        return dbConnection.model('User', userSchema);
    } catch (error) {
        console.error('Error creating User model:', error.message);
        throw error;
    }
};

const User = await createModel();

export default User;