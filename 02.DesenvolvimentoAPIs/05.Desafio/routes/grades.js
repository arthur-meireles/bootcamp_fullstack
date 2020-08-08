import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();
const { readFile, writeFile } = fs;

/* ---- Create grade ---- */
router.post('/', async (req, res, next) => {
	try {
		let body = req.body;
		const data = JSON.parse(await readFile(`${global.path}`));
		const { student, subject, type, value } = body;
		body = {
			id: data.nextId++,
			student: student,
			subject: subject,
			type: type,
			value: value,
			timestamp: new Date(),
		};

		data.grades.push(body);
		await writeFile(global.path, JSON.stringify(data, null, 2));
		global.logger.info(
			`${req.method} ${req.baseUrl} - Grade Created ✓ | id: ${body.id}`,
		);
		res.send(body);
	} catch (err) {
		next(err);
	}
});

/* ---- Update grade ---- */
router.put('/', async (req, res, next) => {
	try {
		let body = req.body;
		const { id, student, subject, type, value } = body;

		//Tratando vazio
		if (!id || !student || !subject || !type || value == null) {
			throw new Error('Required fields are blank.');
		}

		const data = JSON.parse(await readFile(`${global.path}`));
		const index = data.grades.findIndex(grade => grade.id == id);

		//Tratando id nao encontrado
		if (index === -1) {
			throw new Error('Nothing with this id was found.');
		}

		data.grades[index].student = student;
		(data.grades[index].subject = subject),
			(data.grades[index].type = type),
			(data.grades[index].value = value),
			(data.grades[index].timestamp = new Date()),
			await writeFile(global.path, JSON.stringify(data, null, 2));
		global.logger.info(
			`${req.method} ${req.baseUrl} - Grade Updated ✓ | id: ${id}`,
		);
		res.send({ message: `Grade with id: ${id}, was successfully changed!` });
	} catch (err) {
		next(err);
	}
});

/* ---- Delete grade ---- */
router.delete('/:id', async (req, res, next) => {
	try {
		let id = req.params.id;
		let data = JSON.parse(await readFile(`${global.path}`));
		const index = data.grades.findIndex(grade => grade.id == id);

		//Tratando id nao encontrado
		if (index === -1) {
			throw new Error('Nothing with this id was found.');
		}
        //Mantendo estrutura do arquivo
        data = {
            "nextId": data.nextId,
            "grades": [data.grades.filter(grade => grade.id != id)]
        };
		await writeFile(global.path, JSON.stringify(data, null, 2));

		global.logger.info(
			`${req.method} ${req.baseUrl} - Grade Deleted ✓ | id: ${id}`,
		);
		res.send({ message: `Grade with id: ${id}, was successfully deleted!` });
	} catch (err) {
		next(err);
	}
});

/* ---- Get grade by id ---- */
router.get('/:id', async (req, res,next) => {
	try {
		let id = req.params.id;
		let data = JSON.parse(await readFile(`${global.path}`));
		
        //Tratando id nao encontrado
        const index = data.grades.findIndex(grade => grade.id == id);
		if (index === -1) {
			throw new Error('Nothing with this id was found.');
		}

		global.logger.info(
			`${req.method} ${req.baseUrl} - Grade GET ✓ | id: ${id}`,
		);
		res.send(data.grades[index]);
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
