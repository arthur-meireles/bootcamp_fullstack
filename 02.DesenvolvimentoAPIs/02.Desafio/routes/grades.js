import express from 'express';
import { promises as fs } from 'fs';
import _ from 'lodash';

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
			`${req.method} ${req.originalUrl} - Grade Created ✓ | id: ${body.id}`,
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
		data.grades[index].subject = subject;
		data.grades[index].type = type;
		data.grades[index].value = value;
		data.grades[index].timestamp = new Date();

		await writeFile(global.path, JSON.stringify(data, null, 2));
		global.logger.info(
			`${req.method} ${req.originalUrl} - Grade Updated ✓ | id: ${id}`,
		);
		res.send({ message: `Grade with id: ${id}, was successfully changed!` });
	} catch (err) {
		next(err);
	}
});

/* ---- Delete grade ---- */
router.delete('/delete', async (req, res, next) => {
	try {
		let id = req.query.id;
		let data = JSON.parse(await readFile(`${global.path}`));
		const index = data.grades.findIndex(grade => grade.id == id);

		//Tratando id nao encontrado
		if (index === -1) {
			throw new Error('Nothing with this id was found.');
		}
		//Mantendo estrutura do arquivo
		data = {
			nextId: data.nextId,
			grades: data.grades.filter(grade => grade.id != id),
		};
		await writeFile(global.path, JSON.stringify(data, null, 2));

		global.logger.info(
			`${req.method} ${req.originalUrl} - Grade Deleted ✓ | id: ${id}`,
		);
		res.send({ message: `Grade with id: ${id}, was successfully deleted!` });
	} catch (err) {
		next(err);
	}
});

/* ---- Get grade by id ---- */
router.get('/search', async (req, res, next) => {
	try {
		let id = req.query.id;

		let data = JSON.parse(await readFile(`${global.path}`));

		//Tratando id nao encontrado
		const index = data.grades.findIndex(grade => grade.id == id);
		console.log(index);
		if (index === -1) {
			throw new Error('Nothing with this id was found.');
		}

		global.logger.info(
			`${req.method} ${req.originalUrl} - Grade GET ✓ | id: ${id}`,
		);
		res.send(data.grades[index]);
	} catch (err) {
		next(err);
	}
});

/* ---- Get sum grade subject ---- */
router.get('/total', async (req, res, next) => {
	try {
		const { student, subject } = req.body;

		let data = JSON.parse(await readFile(`${global.path}`));
		data = data.grades.filter(grade => grade.student == student);
		data = data.filter(grade => grade.subject == subject);
		data = data.map(data => {
			return data.value;
		});

		let total = data.reduce((accum, curr) => accum + curr);

		global.logger.info(
			`${req.method} ${req.originalUrl} - Calculating grades [Student: ${student} | Subject: ${subject} | Total: ${total}]`,
		);
		res.json({ student: student, subject: subject, total: total });
	} catch (err) {
		next(err);
	}
});

/* ---- Get grade average ---- */
router.get('/average', async (req, res, next) => {
	try {
		let { subject, type } = req.body;
		let data = JSON.parse(await readFile(`${global.path}`));

		data = data.grades.filter(grade => grade.subject === subject);
		data = data.filter(grade => grade.type == type);

		let arrayOfValues = data.map(data => {
			return data.value;
		});

		let total = arrayOfValues.reduce((accum, curr) => accum + curr);
		total = total / data.length;

		global.logger.info(
			`${req.method} ${req.originalUrl} - Calculating averages for [${subject}, ${type}]`,
		);

		res.json(total);
	} catch (err) {
		next(err);
	}
});

/* ---- Get grade average ---- */
router.get('/best', async (req, res, next) => {
	try {
		let { subject, type } = req.body;
		let data = JSON.parse(await readFile(`${global.path}`));

		data = data.grades.filter(grade => grade.subject === subject);
		data = data.filter(grade => grade.type == type);

		data = _.orderBy(data, ['value'], ['desc']);

		const best = data.slice(0, 3);
		global.logger.info(
			`${req.method} ${req.originalUrl} - Get best grades with [${subject}, ${type} ]`,
		);

		res.json(best);
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
