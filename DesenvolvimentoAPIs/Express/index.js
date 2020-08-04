import express from 'express';

const app = express();

app.get('/', (req, res) => {
	let a = 2;
	let b = 4;
	let sum = a + b;
	res.send('hello b');
});

app.listen(3000, () => {
	console.warn('API Started on port 3000...');
});
