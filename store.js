var form = document.getElementById('my-form');
var itemList = document.getElementById('users');

form.addEventListener('submit',save);
let i=0;
function save(e){
    i++;
    e.preventDefault();
    let item =[];
   
    let myObj = {
        nameee : document.getElementById('name').value,
         email : document.getElementById('email').value
    };
    
    item.push(i);
    display(myObj);   
localStorage.setItem(myObj.email,JSON.stringify(myObj));

 
}
const li = document.createElement("li");
    li.className = "items";
    
function display(myObj){
    if(localStorage.getItem(myObj.email)!==null){
        li.remove();
    }
   
    li.appendChild(
        document.createTextNode("Name : "+myObj.nameee + ", EmailId : " + myObj.email + " ")
      );

  const a1 = document.createElement("input");
  
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    
    document.getElementById("name").value = myObj.nameee;
    document.getElementById("email").value = myObj.email;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  
  li.appendChild(a1);
  
  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem(myObj.email);
    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  
  li.appendChild(a);
  
     itemList.append(li);
}




