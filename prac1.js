// let a =5;
// let b =8;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("a = "+a);
// console.log("b = "+b);

// const s = 'tech, comp, it, code';
// console.log(s.split(', '))

// //arrays
// const A = [1,2,3,4,-1];
// const N = A.length;

// console.log(num);

// const fruits = ['apple','orange','pear','mango',10,true];
// fruits.push('banana');
// fruits.unshift('kiwi');
// console.log(fruits);
// console.log(fruits[1]);
// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('apple'));
// console.log(fruits.indexOf('apple'));

// 
const person = {
       firstName : 'rajlaxmi',
       LastName : 'das',
       age: 23,
       hobbies : ['music','movies','sports'],
       address : {
           city :'rairangpur',
           state : 'odisha'
       }
   }
   console.log(person.hobbies[1])
   console.log(person.address.state)

   const {age, address:{state}} = person;
   console.log(age);
   console.log(state);

   person.email = 'raj@gmail.com';
   console.log(person);

   const todos=[
       {
              id: 1,
              text: 'run',
              isCompleted: true
       },
       {
              id: 2,
              text: 'eat',
              isCompleted: true
        },
        {
              id: 3,
              text: 'sleep',
              isCompleted: false
       }
       ];
     //  console.log(todos[1].id);
     //  const todoJSON = JSON.stringify(todos);
     //  console.log(todoJSON);

      for (let i = 0; i < todos.length; i++) {
       console.log(todos[i].id);
      }

      //while
      let i=0;
      while (i< todos.length) {
         console.log(todos[i].id);
         i++;
      }

      //forof
      for (const todo of todos) {
        console.log(todo.id);
      }

      //forEach, map, filter
      todos.forEach(function(todo) {
       console.log(todo.id);
      });

         todos.forEach((todo) => console.log(todo.id));

      const todoID = todos.map(function(todo) {
        return todo.id;
      });
      console.log(todoID);

      const todoComp = todos.filter(function(todo) {
       return todo.isCompleted === true;
     }).map(function(todo) {
       return todo.id;
     })
     console.log(todoComp);
