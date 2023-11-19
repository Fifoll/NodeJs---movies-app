import connectToDatabase from "../config/mongoConnection.js";
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: [true, "Field title is required"],
        minlength: [6, 'Must be at least 6, got {VALUE}']
    },
    year: Number,
    cast: [String],
    genres: [String],
    href: String,
    extract: String,
    thumbnail: String,
    thumbnail_width: Number,
    thumbnail_height: Number
}) 

const createModel = async () => {
    try {
        const dbConnection = await connectToDatabase();
        return dbConnection.model('Movie', movieSchema);
    } catch (error) {
        throw error;
    }
}

const Movie = await createModel();

export default Movie;