/*
 ********* ESTADO DA APLICAÇÃO [state] *********
 */

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

/*
 ********* ON LOAD *********
 */

window.addEventListener('load', () => {
	//Mapeando a DOM
	tabCountries = document.querySelector('.tabCountries');
	tabFavorites = document.querySelector('.tabFavorites');
	countCountries = document.querySelector('.countCountries');
	countFavorites = document.querySelector('.countFavorites');
	totalPopulationList = document.querySelector('.totalPopulationList');
	//prettier-ignore
	totalPopulationFavorites = 
    document.querySelector('.totalPopulationFavorites');

	numberFormat = Intl.NumberFormat('pt-BR');

	//Invocando funções
	fetchCountries();
});

async function fetchCountries() {
	const res = await fetch('https://restcountries.eu/rest/v2/all'); //Traz binário
	const json = await res.json(); //converte em json()
	//prettier-ignore
	allCountries = json.map(country => {//para cada 1 que percorrer vai =>
        //Desestruturando
        const { numericCode, translations, population , flag} = country; 

		return {
			id: numericCode,
			name: translations.pt,
			population,
			flag
		};
	});

	//Montando a tela
	render();
}

function render() {
	renderCountrieList();
	renderFavorites();
	renderSummary();
	handleCountrieButtons();
}

function renderCountrieList() {
	let countriesHTML = '<div>';
	allCountries.forEach(country => {
		const { name, population, flag, id } = country;

		const countryHTML = `
            <div class="country">

            <div>
            <a id=${id} class="material-icons">
            add_circle_outlined
            </a>
            </div>

            <div class="flag">
                <img src="${flag}" alt="${name}">
            </div>

            <div class="nome">
                ${name}
            </div>

            </div>
        `;
		countriesHTML += countryHTML;
	});
	tabCountries.innerHTML = countriesHTML;
}
function renderFavorites() {}
function renderSummary() {}
function handleCountrieButtons() {}
