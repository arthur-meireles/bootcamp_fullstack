import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	throw new Error('error message tst');
});

app.post('/', async (req, res, next) => {
	try {
		throw new Error('error Async');
	} catch (err) {
		next(err);
	}
});

//Bom se manter no final
app.use((err, req, res, next) => {
	console.log('erro 1');
	res.status(500).send('AI CARALHO, UM ERRO!');
});

app.listen(3000, () => {
	console.log('API Started...');
});
