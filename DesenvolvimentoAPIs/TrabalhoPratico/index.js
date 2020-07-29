import { promises as fs } from 'fs';

//STATES

let estados = null;
let cidades = null;
let cidadesPorUF = [];

start();

async function start() {
	try {
		estados = JSON.parse(await fs.readFile('estados.json'));
		cidades = JSON.parse(await fs.readFile('cidades.json'));
		cities();
	} catch (err) {
		console.log(err);
	}
}

async function cities() {
	for (var estado of estados) {
		let path = './jsons/';
		let city = cidades.filter(cidade =>{
			return cidade.Estado === estado.ID;
		})
		city = JSON.stringify(city);
		await fs.writeFile(`${path}${estado.Sigla}.json`, city);
	}
}
