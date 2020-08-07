import express from 'express';
import { promises as fs } from 'fs';

const path = './jsons';
const router = express.Router();
const { readFile, writeFile } = fs;

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

router.get('/', async (req, res)=>{
    try{
        const data = JSON.parse(await readFile(`${global.path}`))
    }catch(err){
        res.status(400).send({ error: err.message });
    }
});

export default router;
