import express from 'express';
import serverConfig from './config/serverConfig.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';
const app = express();

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/user', userRoutes);

app.listen(serverConfig.PORT, serverConfig.HOST_NAME, () => {
    console.log(`server started at ${serverConfig.HOST_NAME}:${serverConfig.PORT}`);
});