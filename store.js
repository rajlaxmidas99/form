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
    
localStorage.setItem(`user ${item}`,JSON.stringify(myObj));
display(myObj);
 
}

function display(myObj){
   // const ul= document.getElementById("users");
    const li = document.createElement("li");
    li.className = "items";
    li.appendChild(
        document.createTextNode("Name : "+myObj.nameee + ", EmailId : " + myObj.email + " ")
      );
      var editBtn = document.createElement('button');
      var delBtn = document.createElement('button');
      
      editBtn.appendChild(document.createTextNode('EDIT'));
      delBtn.appendChild(document.createTextNode('DELETE'));
      delBtn.style.backgroundColor = "red";
      editBtn.style.backgroundColor="green";
      li.appendChild(editBtn);
      li.appendChild(delBtn);
     itemList.append(li);
}




