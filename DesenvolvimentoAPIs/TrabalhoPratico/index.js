import { promises as fs } from 'fs';
import _ from 'lodash';

/*
		ESTADO DA APLICACAO
*/

let estados = []; //todos estados
let cidades = []; //todas cidades
let citiesByUF = []; //cidades agrupadas por uf
let bigStates = []; // 5 estados com maior numero de cidades
let smallStates = []; // 5 estados com menor numero de cidades
let biggestByUf = []; //Maiores nomes de cidade por uf
let smallestByUf = []; //Menores nomes de cidade por uf
let biggestOfCountry = []; //Maior cidade do país
let smallestOfCountry = []; //Menor cidade do país

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
	for (let estado of estados) {
		let citiesOfUF = cidades
			.filter(cidade => {
				return cidade.Estado === estado.ID;
			})
			.sort();
		//prettier-ignore
		citiesByUF = [...citiesByUF, {
			uf: estado.Sigla,
			cities: [...citiesOfUF],
		}]
		await fs.writeFile(
			`${path}${estado.Sigla}.json`,
			JSON.stringify(citiesOfUF),
		);
		// await fs.writeFile(
		// 	`${path}ALL.json`,
		// 	JSON.stringify(citiesByUF),
		// );
	}
	compareStateSize();
	compareNameSizes();
}

// [02] Recebe UF e retorna a quantidade de cidades
async function quantidadeDeCidades(uf) {
	const quantity = JSON.parse(await fs.readFile(`${path}${uf}.json`)).length;
	return quantity;
}

// [03 -04] Cria um map de uf + total de cidades e manipula esse array
async function compareStateSize() {
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

// [05 -08] maiores e menores nomes de cidades
async function compareNameSizes() {
	try {
		biggestByState();
		smallestByState();
		biggestByCountry();
		smallestByCountry();

		function biggestByState() {
			//CAMINHA UFS
			for (let uf of citiesByUF) {
				let cities = uf.cities;

				let largestCityOFState = [];

				let maiorCidade = '';
				//CAMINHA CIDADES DA UF ACIMA
				for (let city of cities) {
					let cidadeAtual = city.Nome;
					if (cidadeAtual.length > maiorCidade.length) {
						maiorCidade = city.Nome;
						//prettier-ignore
					}
				}
				largestCityOFState = [
					{
						uf: uf.uf,
						city: maiorCidade,
					},
				];
				biggestByUf = [...biggestByUf, ...largestCityOFState];
			}

			//console.log(biggestByUf);
		}
		function smallestByState() {
			//CAMINHA UF (ex: DF)
			for (let uf of citiesByUF) {
				let smallestCityOFState = [];
				let simpleArray = [];

				//Caminha cidade (ex: Brasilia)
				for (let city of uf.cities) {
					//Cria array so com nomes
					simpleArray.push(city.Nome);
				}

				//reduce no array de nomes
				const shorter = (left, right) =>
					left.length <= right.length ? left : right;
				let menorCidade = simpleArray.reduce(shorter);

				//Monta Objeto por estado
				smallestCityOFState = [
					{
						uf: uf.uf,
						city: menorCidade,
					},
				];

				smallestByUf = [...smallestByUf, ...smallestCityOFState];
			}
			//console.log(smallestByUf);
		}
		function biggestByCountry() {
			biggestOfCountry = biggestByUf.reduce(function (a, b) {
				return a.city.length > b.city.length ? a : b;
			});
			//console.log(biggestOfCountry);
		}
		function smallestByCountry() {

			const shorter = (left, right) =>
			left.city.length <= right.city.length ? left : right;
			smallestOfCountry = smallestByUf.reduce(shorter);

			console.log(smallestOfCountry);
		}
	} catch (err) {
		console.log(err);
	}
}
