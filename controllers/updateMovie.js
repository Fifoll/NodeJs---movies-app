import Movie from '../config/mongoConnection.js';

const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const options = {
            runValidators: true
        }
        await Movie.findByIdAndUpdate(movieId, req.body, options);
        res.status = 200;
        res.send({
            success: true,
            message: `Updated movie with id ${movieId}`,
            data: {}
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
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
};

export default updateMovie;