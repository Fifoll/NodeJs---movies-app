import Movie from '../../models/movie.js';

const deleteSingleMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findOne({_id: movieId});
        if(movie) {
            await Movie.deleteOne({_id: movieId});
            res.status(200);
            res.send({
                success: true,
                message: `Deleted movie with id ${movieId}`
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

export default deleteSingleMovie;