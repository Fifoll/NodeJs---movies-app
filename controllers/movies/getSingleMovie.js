import Movie from '../../models/movie.js';

const getSingleMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if(movie) {
            res.status(200);
            res.send({
                success: true,
                message: `Got movie with id ${movieId}`,
                data: movie,
            });
        } else {
            res.status = 404;
            res.send({
                success: false,
                message: `Cannot find movie with id ${movieId}`,
                status: res.status
            })
        }
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

export default getSingleMovie;