window.addEventListener('load', start);

var globalNames = ['name', 'name2', 'name3'];
var inputName = null;

function start(){
    inputName = document.querySelector('#name');
    
    preventFormSubmit();
    activateInput();
}

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput(){
    inputName.focus();
}