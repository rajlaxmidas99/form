var form = document.getElementById('my-form');

form.addEventListener('submit',save);

function save(e){
    e.preventDefault();
    var nameee = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('name',nameee);
    localStorage.setItem('email',email);
}