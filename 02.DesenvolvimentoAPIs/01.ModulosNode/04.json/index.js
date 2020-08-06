'use stricts';
import { promises as fs } from 'fs';

writeReadJson();

async function writeReadJson() {
	try {
		const cars = { carro: ['celta', 'clio', 'uno'] };
		await fs.writeFile('teste.json', JSON.stringify(cars));
		const data = JSON.parse(await fs.readFile('teste.json'));
		data.carro.push('sandero');
		await fs.writeFile('teste.json', JSON.stringify(data))
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
