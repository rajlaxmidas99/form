var form = document.getElementById('my-form');

form.addEventListener('submit',save);

function save(e){
    e.preventDefault();
   // let item =[];
    let myObj =JSON.parse(localStorage.getItem("myObj")) || null;
     myObj.push({
        nameee : document.getElementById('name').value,
         email : document.getElementById('email').value
    });
    

localStorage.setItem("myObj",JSON.stringify(myObj));
console.log(localStorage);
 
}




