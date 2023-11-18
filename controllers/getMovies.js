import Movie from '../config/mongoConnection.js'

const getMovies = async (req, res) => {
    try {
        let limitMovies = req.query.limit ?? null;
        let pageNumber = req.query.page ? (req.query.page - 1) * limitMovies : 0;
        const movies = await Movie.find().skip(pageNumber).limit(limitMovies); //localhost:3000/api/movies?page=2&limit=10
        res.status(200);
        res.send({
            success: true,
            message: "all movies here!",
            data: movies,
        });
    }
    catch(err) {
        res.status = 500;
        res.send({
            success: false,
            message: err.message,
            status: res.status
        })
    }
}

export default getMovies;