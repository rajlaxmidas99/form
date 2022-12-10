var form = document.getElementById('my-form');

form.addEventListener('submit',save);
let i=0;
function save(e){
    i++;
    e.preventDefault();
    let item =[];
   
  //  let myObj =JSON.parse(localStorage.getItem("myObj")) || null;
    let myObj = {
        nameee : document.getElementById('name').value,
         email : document.getElementById('email').value
    };
    
    item.push(i);
    
localStorage.setItem(`user ${item}`,JSON.stringify(myObj));
console.log(localStorage);
 
}




