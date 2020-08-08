import express from 'express';
import { promises as fs } from 'fs';
import { grades } from './backup/gradesBackup.js';
import winston from 'winston';
import cors from 'cors';
import gradesRouter from './routes/grades.js';

const app = express();
const { readFile, writeFile } = fs;
global.path = './grades.json';

/* ---- Logger Configure ---- */
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'grades-control-api.log' }),
	],
	format: combine(label({ label: 'grades-control' }), timestamp(), myFormat),
});

app.use(express.json());
app.use(cors());
app.use('/grades', gradesRouter);

app.listen(3000, async () => {
	try {
		if(await readFile(path)){
        logger.info('All right here, rising aplication...');
        }
	} catch (err) {
		logger.warn('Ops, file not found.');
		await writeFile(path, JSON.stringify(grades, null, 2));
		logger.warn(`Let's solve it now .... Solved!`);
	}
});
