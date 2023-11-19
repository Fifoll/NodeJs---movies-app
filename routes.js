import express from 'express';
import getMovies from './controllers/movies/getMovies.js';
import getSingleMovie from './controllers/movies/getSingleMovie.js';
import createMovie from './controllers/movies/createMovie.js';
import deleteSingleMovie from './controllers/movies/deleteMovie.js';
import updateMovie from './controllers/movies/updateMovie.js';

const movieRoutes = express.Router();

movieRoutes.get('/', getMovies);

movieRoutes.get('/:id', getSingleMovie);

movieRoutes.post('/', createMovie);

movieRoutes.delete('/:id', deleteSingleMovie);

movieRoutes.put('/:id', updateMovie); 

export default movieRoutes;