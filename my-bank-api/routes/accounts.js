import express from 'express';
import { promises as fs } from 'fs';

const path = './jsons';
const router = express.Router();
const { readFile, writeFile } = fs;

// post account
router.post('/', async (req, res) => {
	try {
		let account = req.body;
		const data = JSON.parse(await readFile(`${global.path}`));

		account = { id: data.nextId++, ...account };
		data.accounts.push(account);

		await writeFile(`${global.path}`, JSON.stringify(data, null, 2));

		res.send(account);
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

// get all accounts
router.get('/', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(`${global.path}`));
		delete data.nextId;
		res.send(data);
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

//get account by id
router.get('/:id', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(`${global.path}`));
		const id = req.params.id;
		let account = data.accounts.find(account => account.id == id);
		res.send(account);
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

//delete account
router.delete('/:id', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(`${global.path}`));
		data.accounts = data.accounts.filter(
			account => account.id != req.params.id,
		);
		await writeFile(`${global.path}`, JSON.stringify(data, null, 2));
		res.send({ message: 'deleted with sucess!' });
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

//update account
router.put('/', async (req, res) => {
	try {
		let body = req.body;
		const data = JSON.parse(await readFile(`${global.path}`));
		const index = data.accounts.findIndex(account => account.id == body.id);

		data.accounts[index] = body;
		await writeFile(global.path, JSON.stringify(data));
		res.send({ message: 'Update sucess!' });
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

export default router;
