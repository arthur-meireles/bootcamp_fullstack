/**
 *          ESTADO DA APLICAÇÃO
 * **/

let allUsers = [];
let usersHTML = null;

window.addEventListener('load', () => {
	//Implementa variaveis
	usersHTML = document.querySelector('.users');

	//Funcoes
	fetchUsers();
});

async function fetchUsers() {
	allUsers = await user
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

	console.log(allUsers);
	render();
}

function render() {
	renderUserList();
}

function renderUserList() {
	let usersListHTML = '';
	allUsers.forEach(user => {
        let {age, gender, name, picture} = user;
        let userListHTML = 
        `<div class="person">
            <img src="${picture}">
            <p>${name} | ${age} anos</p>
        </ul>
        </div>`

        usersListHTML += userListHTML;
    });
    usersHTML.innerHTML = usersListHTML;
}
