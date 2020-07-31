import { promises as fs } from 'fs';
import _ from 'lodash';
import { ALL } from 'dns';

/*
		ESTADO DA APLICACAO
*/

let estados = [];
let cidades = [];
let citiesByUF = [];
let bigStates = [];
let smallStates = [];
let statesWithCities = [];

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
	let all = [];
	for (let estado of estados) {
		let citiesOfUF = cidades
			.filter(cidade => {
				return cidade.Estado === estado.ID;
			})
			.sort();

			let state = [{[estado.Sigla]: citiesOfUF}];

		console.log(state[0]);
		// temp = state.map((uf)=>({...uf,cidades:citiesOfUF}));
		// all = all + state;
		// console.log(state);
		//cities = JSON.stringify(cities);
		all = [...all, state];
		// await fs.writeFile(`${path}${estado.Sigla}.json`, cities);
	}
	// console.log(all[0]);
	await fs.writeFile(`${path}Tmp.json`, JSON.stringify(all));
	//console.log(await all);
	// await fs.writeFile(`${path}All.json`, JSON.stringify(citiesByUF));
	biggestAndSmallestStates();
	biggestAndSmallestCitieNames();
}

// [02] Recebe UF e retorna a quantidade de cidades
async function quantidadeDeCidades(uf) {
	const quantity = JSON.parse(await fs.readFile(`${path}${uf}.json`)).length;
	return quantity;
}

// [03 -04] Cria um map de uf + total de cidades e manipula esse array
async function biggestAndSmallestStates() {
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
		biggest.sort((a, b) => b.total - a.total);
		smallest.sort((a, b) => b.total - a.total);

		for await (let state of biggest) {
			bigStates.push(`${state.uf} - ${state.total}`);
		}

		for await (let state of smallest) {
			smallStates.push(`${state.uf} - ${state.total}`);
		}
	} catch (err) {
		console.log(err);
	}
}

// [05 -06] maiores e menores nomes de cidades
async function biggestAndSmallestCitieNames() {
	try {
		let i = 0;
		let testArray = [];
		//console.log(await citiesByUF);
		for (let state of estados) {
			i++;
		}
	} catch (err) {
		console.log(err);
	}
}
