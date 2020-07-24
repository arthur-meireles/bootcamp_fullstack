/**
 *          ESTADO DA APLICAÇÃO
 * **/

let allUsers = [];

window.addEventListener('load', () => {
	//Implementa variaveise

	//Funcoes
	fetchUsers();
});

function fetchUsers() {
    allUsers = user.map(user => {
        const name = `${user.name.first} ${user.name.last}`;
        const {gender} = user;
        return {
            name,
            age: user.dob.age,
            gender
        };
    }).sort((a, b) => a.name.localeCompare(b.name))

    console.log(allUsers);
    render();
}


function render() {
    renderUserList();
}

