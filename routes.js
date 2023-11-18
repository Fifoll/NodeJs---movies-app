import express from 'express';
import getMovies from './controllers/getMovies.js';
import getSingleMovie from './controllers/getSingleMovie.js';
import createMovie from './controllers/createMovie.js';
import deleteSingleMovie from './controllers/deleteMovie.js';
import updateMovie from './controllers/updateMovie.js';

const movieRoutes = express.Router();

movieRoutes.get('/', getMovies);

movieRoutes.get('/:id', getSingleMovie);

movieRoutes.post('/', createMovie);

movieRoutes.delete('/:id', deleteSingleMovie);

movieRoutes.put('/:id', updateMovie); 

export default movieRoutes;