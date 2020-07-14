window.addEventListener('load', start);

var globalNames = ['name', 'name2', 'name3'];

function start(){
    preventFormSubmit();
}

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}
