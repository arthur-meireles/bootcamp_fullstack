import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const functions = {
	quest() {
		rl.question('Digite um numero: ', numero => {
			console.log(`Seu numero é: ${numero}`);
			rl.close();
		});
	},
	sum(a, b) {
		return console.log(a + b);
	},
};

functions.sum(1, 2);
functions.quest();

// const quest = () => {
// 	rl.question('Digite um numero: ', numero => {
// 		console.log(`Seu numero é: ${numero}`);
// 		quest();
// 	});
// };
