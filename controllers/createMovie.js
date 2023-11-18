import Movie from '../config/mongoConnection.js';

const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.validate();
        await movie.save();
        res.status = 200;
        res.send({
            success: true,
            message: `Create new movie with id ${movie._id}`,
            data: movie,
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

export default createMovie;