/**
 *          STATE OF APP
 * **/

let allUsers = [];
let searchedUsers = [];
let usersHTML = null;
let statisticsHTML = null;
let input = null;
let search = null;
let totalMales = [];
let totalFemales = [];
let sumAges = null;
let averageAge = null;

/**
 *          IMPLEMENTATION
 * **/

window.addEventListener('load', () => {
	usersHTML = document.querySelector('.users');
	input = document.querySelector('#input');
	statisticsHTML = document.querySelector('.statistics');

	//Functions
	preventFormSubmit();
	fetchUsers();
});

function fetchUsers() {
	allUsers = user
		.map(user => {
			const name = `${user.name.first} ${user.name.last}`;
			const { gender, picture } = user;
			return {
				name,
				age: user.dob.age,
				gender,
				picture: picture.large,
			};
		})
		.sort((a, b) => a.name.localeCompare(b.name));

	doSearch();
}

function render() {
	renderUserList();
	renderStatistics();
	resetSearch();
}

function renderUserList() {
	let usersListHTML = '';
	searchedUsers.forEach(user => {
		let { age, gender, name, picture } = user;
		let userListHTML = `<div class="person">
            <img src="${picture}">
            <p>${name} | <a>${age} anos</a></p>
        </ul>
        </div>`;

		usersListHTML += userListHTML;
	});
	usersHTML.innerHTML = usersListHTML;
}

function renderStatistics() {
	doStatistics();

	let statisticsListHTML = '';
	statisticsListHTML = `
    <ul>
        <li>Sexo masculino: <a>${totalMales}</a></li>
        <li>Sexo feminino: <a>${totalFemales}</a></li>
        <li>Soma das idades: <a>${sumAges}</a></li>
        <li>Média das idades: <a>${averageAge}</a></li>
    </ul>
    `;
	statisticsHTML.innerHTML = statisticsListHTML;
}

function doSearch() {
	function handleSearch() {
		input.addEventListener('keyup', () => {
			search = event.target.value;
			searchedUsers = allUsers.filter(user => {
				return user.name.toLowerCase().includes(search);
			});
			render();
		});
		input.addEventListener('keyup', () => {
			if (event.key === 'Enter') {
				search = event.target.value;
				searchedUsers = allUsers.filter(user => {
					return user.name.toLowerCase().includes(search);
				});
				render();
			}
			return;
		});
	}
	handleSearch();
}

function resetSearch() {
	searchedUsers = allUsers;
}

function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	var form = document.querySelector('form');
	form.addEventListener('submit', handleFormSubmit);
}

function doStatistics() {
	totalMales = searchedUsers.filter(user => user.gender === 'male').length;
	totalFemales = searchedUsers.filter(user => user.gender === 'female').length;
	sumAges = searchedUsers.reduce((acc, user) => {
		return acc + user.age;
	}, 0);
	average = sumAges / searchedUsers.length;
	averageAge = average.toPrecision(4);
}
