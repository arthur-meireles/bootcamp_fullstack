import { promises as fs } from 'fs';
import _ from 'lodash';

/*
		ESTADO DA APLICACAO
*/

let estados = [];          //Todos os estados
let cidades = [];	      //todas as cidades
let bigStates = [];	     //5 maiores estados
let smallStates = [];   //5 menores estados

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

// [03 -04] Cria um map de uf + total de cidades e manipula esse array
async function biggestStates() {
	try {
		let statesWithCitiesNumber = Promise.all(
			estados
				.map(async state => {
					return {
						uf: state.Sigla,
						total: await quantidadeDeCidades(`${state.Sigla}`),
					};
				})
				.sort(),
		);
		
		//Usando lodash para orgenar pelo total
		let biggest = _.sortBy(await statesWithCitiesNumber, 'total').slice(22);
		//prettier-ignore
		let smallest = _.sortBy(await statesWithCitiesNumber, 'total').slice(0,5);

		//ordenando decrescentemente
		biggest.sort((a,b) => b.total - a.total);
		smallest.sort((a,b) => b.total - a.total);

		for await (let state of biggest){
			bigStates.push(`${state.uf} - ${state.total}`);
		}

		for await (let state of smallest){
			smallStates.push(`${state.uf} - ${state.total}`);
		}


	} catch (err) {
		console.log(err);
	}
}
