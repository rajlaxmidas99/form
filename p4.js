//single element

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));

//multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

 const ul = document.querySelector('.items');
 // ul.lastElementChild.remove();
    ul.firstElementChild.textContent = 'HELLO';
    ul.firstElementChild.style.background = 'green';
    ul.children[1].innerText='Brad';
    ul.children[1].style.background = 'yellow';
    ul.lastElementChild.innerHTML='<h1>hello</h1>';

    const btn = document.querySelector('.btn');
    btn.addEventListener('click',(e) => {
        e.preventDefault();
      //  console.log(e.target.className);
      document.querySelector('#my-form').style.background = 'blue';
      document.querySelector('body').classList.add('bg-dark');
    });
    btn.addEventListener('mouseover',(e) => {
        e.preventDefault();
      //  console.log(e.target.className);
      document.querySelector('#my-form').style.background = '#ccc';
      document.querySelector('body').classList.add('bg-dark');
    });
    btn.addEventListener('mouseout',(e) => {
        e.preventDefault();
      //  console.log(e.target.className);
      document.querySelector('#my-form').style.background = 'teal';
      document.querySelector('body').classList.add('bg-dark');
    });

    const myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const User1 = document.querySelector('#users');

    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        if (nameInput.value === '' || emailInput.value === '') {
            msg.classList.add('error');
            msg.innerHTML='Please enter all fields';

            setTimeout(() => msg.remove(), 3000);
        }else{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

            User1.appendChild(li);

            //clear fields
            nameInput.value='';
            emailInput.value='';
        }
    }