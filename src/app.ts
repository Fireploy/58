import { configDotenv } from 'dotenv';
import express from 'express';
import { connection } from './database/connection';
import { logger } from './logger/winston';
import { mainRouter } from './routers';
import cors from 'cors';
configDotenv();
connection();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, ()=>{
	logger.info('Servidor Corriendo en el Puerto 8020');
});
app.use(mainRouter);