window.addEventListener('load', start);

const clickArray = [];

function start() {
	console.log('Page loaded');
	const button = document.querySelector('#clickButton');
	button.addEventListener('click', handleButtonClick);
}

const render = () => {
	const ul = document.querySelector('#data');
	ul.innerHTML = '';
	let lis = '';

	clickArray.map(item => {
		lis += `<li>${item}</li>`;
	});

    ul.innerHTML = lis;
    
    document.title = clickArray.length;
};

function handleButtonClick() {
	clickArray.push(getNewTimestamp());

	render();
}
