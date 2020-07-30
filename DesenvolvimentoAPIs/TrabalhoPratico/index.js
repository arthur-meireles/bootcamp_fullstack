import { promises as fs } from 'fs';
import _ from 'lodash';

/*
		ESTADO DA APLICACAO
*/

let estados = null;
let cidades = null;

let path = './jsons/';

start();

async function start() {
	try {
		estados = JSON.parse(await fs.readFile('estados.json', 'utf-8'));
		cidades = JSON.parse(await fs.readFile('cidades.json', 'utf-8'));
		cidadesPorEstado();
		quantidadeDeCidades('DF');
	} catch (err) {
		console.log(err);
	}
}

// [01] Cria um json para cada estado com o titulo da UF e guarda suas cidades dentro
async function cidadesPorEstado() {
	for (var estado of estados) {
		let city = cidades.filter(cidade => {
			return cidade.Estado === estado.ID;
		});
		city = JSON.stringify(city);
		await fs.writeFile(`${path}${estado.Sigla}.json`, city);
	}
	biggestStates();
}

// [02] Recebe UF e retorna a quantidade de cidades
async function quantidadeDeCidades(uf) {
	const quantity = JSON.parse(await fs.readFile(`${path}${uf}.json`)).length;
	return quantity;
}

async function biggestStates() {
	try {
		let statesWithCitiesNumber = [];
		statesWithCitiesNumber = Promise.all(
			estados
				.map(async state => {
					return {
						uf: state.Sigla,
						total: await quantidadeDeCidades(`${state.Sigla}`),
					};
				})
				.sort(),
		);
		var sorted = _.sortBy(await statesWithCitiesNumber, 'total').slice(22);

		console.log(await sorted);
		//await fs.writeFile('states.json', JSON.stringify( await sorted));
	} catch (err) {
		console.log(err);
	}
}
