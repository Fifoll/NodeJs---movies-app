import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const dbConnection = await mongoose.createConnection('mongodb://localhost:27017/movies');
        return dbConnection;
    } catch (err) {
        throw err;
    }
};

export default connectToDatabase;