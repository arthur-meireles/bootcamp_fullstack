import { promises as fs } from 'fs';
import _ from 'lodash';

/*
		ESTADO DA APLICACAO
*/

let estados = [];
let cidades = [];
let citiesByUF = [];
let bigStates = [];
let smallStates = [];
let largestCitieName = [];
let smallestCitieNames = [];

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
		//biggest();
		smallest();

		function biggest() {
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
				largestCitieName = [...largestCitieName, ...largestCityOFState];
			}

			console.log(largestCitieName);
		}
		function smallest() {
			//CAMINHA UF (DF)
			for (let uf of citiesByUF) {
				let smallestCityOFState = [];
				let temp = [];
				
				//Caminha cidade (Brasilia)
				for(let city of uf.cities) {
					//Cria array so com nomes
					temp.push(city.Nome);
				}

				//reduce no array de nomes
				smallestCityOFState = temp.reduce((acumulador, valorAtual) => {
					 (a, b) => a.length <= b.length ? a : b
				
				});

				console.log(smallestCityOFState);
				// smallestCityOFState = [
				// 	{
				// 		uf: uf.uf,
				// 		city: menorCidade,
				// 	},
				// ];
				//smallestCitieNames = [...smallestCitieName, ...smallestCityOFState];
			}

			//console.log(smallestCitieNames);
		}
	} catch (err) {
		console.log(err);
	}
}
