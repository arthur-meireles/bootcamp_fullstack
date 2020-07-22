'use'; // O JavaScript acusa mais erros

window.addEventListener('load', () => {
	doSpread();
	doRest();
	doDestructuring();
});

//------ Spread ------//
function doSpread() {
	const mariedMan = people.filter(person => person.name.title == 'Mr');
	const mariedWoman = people.filter(person => person.name.title == 'Ms');

	const mariedPeople = [...mariedMan, ...mariedWoman];
}

//------ Rest ------//
function doRest() {
	console.log(infinitySum(1, 2));
	console.log(infinitySum(1, 2000, 1000, 212340));
}

function infinitySum(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
	const first = people[0];

	// Repetitivo
	// const username = first.login.username;
	// const password = first.login.password;

	// Desestruturando
	const { username, password } = first.login;

	console.log(username, password);
}
