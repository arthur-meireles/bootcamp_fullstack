//Evento que captura o load da pagina
window.addEventListener('load', () => {
	const div = document.querySelector('.principal');
	let count = 0;

	//SetInterval
	const interval = setInterval(() => {
		div.textContent = ++count;

		if (count === 10) {
			this.clearInterval(interval);
			return;  
		}
		if (count % 5 === 0) {
			setTimeout(() => {
				div.textContent = count + ',5';
			}, 500);
		}
	}, 1000);
});
