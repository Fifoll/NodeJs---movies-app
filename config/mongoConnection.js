import mongoose from "mongoose";

const dbConnection = await mongoose.connect('mongodb://localhost:27017/movies');

export default dbConnection;