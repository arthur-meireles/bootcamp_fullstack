//Estado da Aplicação
let globalNames = [
	"Eduardo Johnson",
	"João Vitor",
	"João Guilherme",
	"Laurrane Maira Ferreira",
];

let inputName = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener("load", () => {
	inputName = document.querySelector("#name");
	preventFormSubmit();
	activateInput();
	render();
});

//Previne o reload da tecla 'enter'
function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	let form = document.querySelector("form");
	form.addEventListener("submit", handleFormSubmit);
}

//Funcao que captura escrita e da foco ao campo
function activateInput() {
	function insertName(newName) {
		//globalNames.push(newName);
		globalNames = [...globalNames, newName];
		console.log(globalNames);
		render();
	}

	function updateName(newName) {
		globalNames[currentIndex] = newName;
	}
	function handleTyping(event) {
		//Validacao espaco em branco
		let hasText = !!event.target.value && event.target.value.trim() !== "";
		if (!hasText) {
			clearInput();
			return;
		}

		if (event.key === "Enter") {
			if (isEditing === true) {
				updateName(event.target.value);
			} else {
				let typedName = event.target.value;
				insertName(typedName);
			}
			isEditing = false;
			clearInput();
			render();
		}
	}

	inputName.addEventListener("keyup", handleTyping);
	inputName.focus();
}

//RENDERIZAR ARRAY NA LISTA
function render() {
	let table = document.querySelector("table");
	table.innerHTML =
		'<th class="theader">Contatos</th><th class="theader">Ações</th>';

	//Criando table-row com td dentro e botão
	function createTr(currentName, index) {
		//Criando Botao de Delete
		function createDeleteButton() {
			function deleteName() {
				// globalNames.splice(index, 1);

				// globalNames = globalNames.filter((name, i) => {
				// 	if (i === index) {
				// 		return false;
				// 	}
				// 	return true;

				// 	return i !== index;
				// });

				globalNames = globalNames.filter((_, i) => i !== index);

				render();
			}
			let span = document.createElement("span");
			let td2 = document.createElement("td");
			span.innerHTML = '<span class="material-icons">delete_forever</span>';
			td2.appendChild(span);
			tr.appendChild(td2);

			span.addEventListener("click", deleteName);
		}

		//tornando editavel
		function editItem() {
			inputName.value = currentName;
			isEditing = true;
			currentIndex = index;
			inputName.focus();
		}

		//Montando Lista
		let tr = document.createElement("tr");
		let td = document.createElement("td");
		let name = document.createTextNode(currentName);
		td.addEventListener("click", editItem); // Adicionando evento ao elemento td

		td.appendChild(name); // td escreve o name dentro
		tr.appendChild(td); //tr monta um td dentro
		createDeleteButton(); //Funcao escreve o botao (recebe elemento pai)
		table.appendChild(tr); // table monta o tr dentro
	}

	for (let i = 0; i < globalNames.length; i++) {
		let currentName = globalNames[i];

		//Montando lista
		createTr(currentName, i);
	}
	clearInput();
}

function clearInput() {
	inputName.value = "";
	inputName.focus();
}
