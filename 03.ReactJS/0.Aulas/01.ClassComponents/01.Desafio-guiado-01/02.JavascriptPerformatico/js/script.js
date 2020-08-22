window.addEventListener('load', start);

const clickArray = [];

function start() {
	console.log('Page loaded');
	const button = document.querySelector('#clickButton');
	button.addEventListener('click', handleButtonClick);
}

const render = (item) => {
	const ul = document.querySelector('#data');

	const li = document.createElement('li');
	li.textContent = item;

	ul.appendChild(li);
    
    document.title = clickArray.length;
};

function handleButtonClick() {
	const item = getNewTimestamp();
	clickArray.push(item);

	render(item);
}
