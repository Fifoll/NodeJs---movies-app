import express from 'express';
import serverConfig from './config/serverConfig.js';
import movieRoutes from './routes.js';
const app = express();

app.use(express.json());

app.use('/api/movies', movieRoutes);

app.listen(serverConfig.PORT, serverConfig.HOST_NAME, () => {
    console.log(`server started at ${serverConfig.HOST_NAME}:${serverConfig.PORT}`);
});