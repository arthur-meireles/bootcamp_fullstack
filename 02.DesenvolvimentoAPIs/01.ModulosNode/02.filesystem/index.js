import { promises as fs } from 'fs';

/* --------- ASYNC / AWAIT  --------- 
init();

async function init() {
	try {
		await fs.writeFile('testando.txt', 'bla bla vladivostok');
		await fs.appendFile('testando.txt', ' vai vai');
        const data = await fs.readFile('testando.txt', 'utf-8');
        console.log(data);
	} catch (err) {
		console.log(err);
	}
}
*/

/* --------- PROMISE  --------- *
fs.writeFile('testando.txt', 'bla bla vladivostok')
	.then(() => {
		fs.appendFile('testando.txt', ' vai vai')
			.then(() => {
				fs.readFile('testando.txt', 'utf-8')
					.then(res => {
						console.log(res);
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	})
	.catch(err => console.log(err));

*/

/* --------- CALLBACK HELL  --------- *
// import fs from 'fs';
// import { isBuffer } from 'util';

console.log(`inicio`);

fs.writeFile('teste.txt', 'hello world', errMsg => {
	console.log(`meio`);
	if (errMsg) {
		console.log('error');
	} else {
		fs.appendFile('teste.txt', ' manito!', err => {
			if (err) {
				console.log('error');
			} else {
				fs.readFile('teste.txt', 'utf8', (err, data) => {
					if (err) {
						console.log('error');
					} else {
						console.log(data);
					}
				});
			}
		});
	}
});

console.log(`fim`);

console.log(`------------------------`);
*/

/* --------- SINCRONA - BLOCK THREAD  --------- *

try {
	console.log('1');
	fs.writeFileSync('test2.txt', 'bla bla bla');
	console.log('2');
	const data = fs.readFileSync('test2.txt', 'utf8');
	console.log(data);
	console.log('3');
} catch (err) {
	console.log('error');
}
*/
