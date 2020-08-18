import express from 'express';
import { promises as fs } from 'fs';

const path = './jsons';
const router = express.Router();
const { readFile, writeFile } = fs;


// post account
router.post('/',async (req, res, next) => {
	try {
		let account = req.body;
		//Tratando vazio
		if (!account.name || account.balance == null) {
			throw new Error('account name or account balance not defined.');
		}

		const data = JSON.parse(await readFile(`${global.path}`));

		account = {
			id: data.nextId++,
			name: account.name,
			balance: account.balance,
		};

		data.accounts.push(account);

		await writeFile(`${global.path}`, JSON.stringify(data, null, 2));
		global.logger.info(`${req.method} ${req.baseUrl} - Success ✓`);
		res.send(account);
	} catch (err) {
		next(err);
	}
});

// get all accounts
router.get('/', async (req, res, next) => {
	try {
		const data = JSON.parse(await readFile(`${global.path}`));
		delete data.nextId;
		global.logger.info(`${req.method} ${req.baseUrl} - Success ✓`);
		res.send(data);
	} catch (err) {
		next(err);
	}
});

//get account by id
router.get('/:id', async (req, res, next) => {
	try {
		const data = JSON.parse(await readFile(`${global.path}`));
		const id = req.params.id;
		let account = data.accounts.find(account => account.id == id);
		global.logger.info(`${req.method} ${req.baseUrl} - Success ✓`);
		res.send(account);
	} catch (err) {
		next(err);
	}
});

//delete account
router.delete('/:id', async (req, res, next) => {
	try {
		const data = JSON.parse(await readFile(`${global.path}`));
		data.accounts = data.accounts.filter(
			account => account.id != req.params.id,
		);
		await writeFile(`${global.path}`, JSON.stringify(data, null, 2));
		global.logger.info(`${req.method} ${req.baseUrl} - Success ✓`);
		res.send({ message: 'Deleted with sucess!' });
	} catch (err) {
		next(err);
	}
});

//update account
router.put('/', async (req, res, next) => {
	try {
		let body = req.body;
		const data = JSON.parse(await readFile(`${global.path}`));
		const index = data.accounts.findIndex(account => account.id == body.id);
		//Tratando id nao encontrado
		if (index === -1) {
			throw new Error('Registry not found.');
		}
		//Tratando vazio
		if (!body.name || body.balance == null) {
			throw new Error('account name or account balance not defined.');
		}

		data.accounts[index].name = body.name;
		data.accounts[index].balance = body.balance;

		await writeFile(global.path, JSON.stringify(data, null, 2));
		global.logger.info(`${req.method} ${req.baseUrl} - Success ✓`);
		res.send({ message: 'Update sucess!' });
	} catch (err) {
		next(err);
	}
});

//update balance
router.patch('/updateBalance', async (req, res, next) => {
	try {
		let body = req.body;
		const data = JSON.parse(await readFile(`${global.path}`));
		const index = data.accounts.findIndex(account => account.id == body.id);

		if (index === -1) {
			throw new Error('Registry not found.');
		}
		data.accounts[index].balance = body.balance;
		await writeFile(global.path, JSON.stringify(data, null, 2));
		global.logger.info(`${req.method} ${req.baseUrl} - Success ✓`);
		res.send({ message: 'Update sucess!' });
	} catch (err) {
		next(err);
	}
});

//tratando erros
router.use((err, req, res, next) => {
	global.logger.error(
		`${req.method} ${req.baseUrl} - [ERROR ✗]: ${err.message}`,
	);
	res.status(400).send({ error: err.message });
});

export default router;
