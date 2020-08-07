import express from 'express';
import { promises as fs } from 'fs';
import accountsRouter from './routes/accounts.js';
import winston from 'winston';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import {swagger} from './swagger.js'

global.path='./jsons/accounts.json'

const { readFile, writeFile } = fs;
const app = express();

app.use(express.json());
app.use('/account', accountsRouter);
app.use(express.static('public'));
app.use(cors()); //Permite o acesso a API a partir de qlq dominio
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swagger));


//Logger Configure
const {combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level,message,label,timestamp})=>{
    return `${timestamp} [${label}] ${level}: ${message}`;
})
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(), 
        new (winston.transports.File)({ filename: "my-bank-log.log"})
    ],
    format: combine(
        label({ label: 'my-bank-api'}), 
        timestamp(),
        myFormat
    )
});


app.listen(3000, async () => {
	try {
		await readFile(`${path}`);
		logger.info('File exists');
		logger.info('Server runing on port 3000...');
	} catch (err) {
		const initialJson = {
			nextId: 1,
			accounts: [],
		};
		await writeFile(`${path}`, JSON.stringify(initialJson))
			.then(() => {
				logger.info('File created');
				logger.info('Server runing on port 3000...');
			})
			.catch(err => logger.error(err));
	}
});
