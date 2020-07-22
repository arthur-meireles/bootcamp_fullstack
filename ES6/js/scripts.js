"use"; // O JavaScript acusa mais erros

window.addEventListener("load", () => {
	doMap();
	doFilter();
	doForEach();
	doReduce();
	doFind();
	doSome();
	doEvery();
	doSort();
});

//------ MAP ------// (Imutável)
function doMap() {
	const nameEmailArray = people.map(person => {
		return {
			name: person.name,
			email: person.email,
		};
	});

	return nameEmailArray;
}

//------ FILTER ------// (Imutável) (So aceita proposicoes verdadeiras)
function doFilter() {
	const olderThan50 = people.filter(person => {
		return person.dob.age > 50;
	});
}

//------ FOR EACH ------// (Mutável) (Atua no vetor, exceto se salvarmos em uma variavel)
function doForEach() {
	const mappedPeople = doMap();

	mappedPeople.forEach(person => {
		person.nameSize =
			person.name.title.length +
			person.name.first.length +
			person.name.last.length;
	});
}

//------ REDUCE ------//
function doReduce() {
	const totalAges = people.reduce((acumulator, current) => {
		return acumulator + current.dob.age;
	}, 0);

}

//------ FIND ------//  (pega o primeiro da lista)
function doFind() {
	const found = people.find(person => {
		return person.location.state === "Goiás";
	});
}

//------ SOME ------//  (Se algum atende a regra == TRUE)
function doSome() {
	const found = people.some(person => {
		return person.location.state === "Amazonas";
	});

}

//------ EVERY ------//  (Se todos atendem a regra == TRUE)
function doEvery() {
	const every = people.every(person => {
		return person.nat === "BR";
	});

}

//------ SORT ------//  (ordenacao)
function doSort() {
	const mappedPeople = people
		.map(person => {
			return { name: person.name.first };
		})
		.filter(person => person.name.startsWith("A"))
		.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
}
