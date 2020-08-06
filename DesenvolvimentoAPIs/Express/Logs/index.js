import express from 'express';
import winston from 'winston';

const app = express();
app.use(express.json());

const { printf, combine, label, timestamp } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} : ${message}`;
});

const logger = winston.createLogger({
	level: 'warn',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'my-log.log' }),
	],
	format: combine(label({ label: 'my-app' }), timestamp(), myFormat),
});

logger.error('error log');
logger.warn('warn log');
logger.info('info log');
logger.verbose('Verbose log');
logger.debug('Debug log');
logger.silly('silly log');
logger.log('info', 'Hello with param');

app.listen(3000, () => {
	console.log('API runing...');
});
