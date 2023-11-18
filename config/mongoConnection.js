import mongoose from "mongoose";

const dbConnection = await mongoose.connect('mongodb://localhost:27017/movies');

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

const Movie = dbConnection.model('Movie', movieSchema);

export default Movie;