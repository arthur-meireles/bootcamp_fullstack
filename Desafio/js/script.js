/**
 *          STATE OF APP
 * **/

let allUsers = [];
let searchedUsers = [];
let usersHTML = null;
let input = null;
let search = null;

/**
 *          IMPLEMENTATION
 * **/

window.addEventListener('load', () => {
	usersHTML = document.querySelector('.users');
	input = document.querySelector('#input');

    //Functions
    preventFormSubmit()
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
}

function renderUserList() {
	let usersListHTML = '';
	searchedUsers.forEach(user => {
		let { age, gender, name, picture } = user;
		let userListHTML = `<div class="person">
            <img src="${picture}">
            <p>${name} | ${age} anos</p>
        </ul>
        </div>`;

		usersListHTML += userListHTML;
	});
    usersHTML.innerHTML = usersListHTML;
    resetSearch();
}

function doSearch() {
	function handleSearch() {
		input.addEventListener('keyup', () => {
			search = event.target.value;
			searchedUsers = allUsers.filter(user => {
				return user.name.includes(search);
				
            });
            render();
        });
        input.addEventListener('keyup', () => {
            if(event.key === 'Enter') {
                search = event.target.value;
			searchedUsers = allUsers.filter(user => {
				return user.name.includes(search);
				
            });
            console.log(searchedUsers);
            render();
            } return
        });
        
	}
    handleSearch();
    
}

function resetSearch(){
    searchedUsers = allUsers;
}

function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	var form = document.querySelector('form');
	form.addEventListener('submit', handleFormSubmit);
}
