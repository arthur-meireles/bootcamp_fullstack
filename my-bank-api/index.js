import express from 'express';
import { promises as fs } from 'fs';
import accountsRouter from './routes/accounts.js';

const { readFile, writeFile } = fs;
const path = './jsons';
const app = express();

app.use(express.json());
app.use('/account', accountsRouter);



app.listen(3000, async () => {
	try {
		await readFile(`${path}/accounts.json`);
		console.log('File exists');
		console.log('Server runing on port 3000...');
	} catch (err) {
		const initialJson = {
			nextId: 1,
			accounts: [],
		};
		await writeFile(`${path}/accounts.json`, JSON.stringify(initialJson))
			.then(() => {
				console.log('File created');
				console.log('Server runing on port 3000...');
			})
			.catch(err => console.log(err));
	}
});
