//https://api.github.com/users/arthur-meireles

//Global variables
let name = null;
let login = null;
let description = null;
let photo = null;
let followers = null;
let loc = null;

window.addEventListener('load', () => {
	name = document.querySelector('h1');
	login = document.querySelector('.login');
	bio = document.querySelector('.bio');
	photo = document.querySelector('.visual');
	followers = document.querySelector('.followers');
	loc = document.querySelector('.location');

	doFetch();
	//----- Promisse ------
	executeDivisionPromise();
	executeDivisionPromiseAsyncAwait();
});

const doFetch = () => {
	const result = fetch('https://api.github.com/users/arthur-meireles').then(
		resource => {
			resource.json().then(data => {
				showData(data);
			});
		},
	);
};

const showData = data => {
	name.textContent = data.name;
	bio.textContent = data.bio;
	login.textContent = data.login;
	followers.textContent = `${data.followers} seguidores`;
	loc.textContent = data.location;

	const img = `<img src="${data.avatar_url}">`;
	photo.innerHTML = img;
};

//----- Promisse ------
function divisionPromise(a, b) {
	return new Promise((resolve, reject) => {
		if (b === 0) {
			reject('Nao é possível dividir por 0');
		}
		resolve(a / b);
	});
}

function executeDivisionPromise() {
	divisionPromise(12, 1)
		.then(result => {
			console.log('o resultado é: ' + result);
		})
		.catch(errMsg => console.log('Falha nessa parada | ' + errMsg));
}

