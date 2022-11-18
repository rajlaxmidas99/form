// const x =10;
// const color = x>10 ? 'red': 'green';
// console.log(color)

// function addNum(num1=1, num2=1){
//     return num1+num2;
// }

// const addNum = (num1=1, num2=1) =>  num1+num2 ;

// console.log(addNum(5,4));
// addNum(2,4);

// const convertTemp = celsius => celsius+273;
// console.log(convertTemp(23));

// function convertTemp1(temperatureValue, conversionUnit){
//     const temp = conversionUnit === 'K'? temperatureValue+273 : temperatureValue-273;
//     return temp;
// }
// console.log(`${convertTemp1(35,'K')}K`);
// console.log(`${convertTemp1(308,'C')}C`);

//constructor function
// function Student(firstName, lastName, roll, sex, age){
//       this.firstName=firstName;
//       this.lastName=lastName;
//       this.roll=roll;
//       this.sex=sex;
//       this.age=age;
      
// }
// Student.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }
// Student.prototype.getBirthYear = function() {
//   const birthYear = new Date().getFullYear() - this.age;
//         return `NAME :${this.getFullName()}, D-O-B: ${birthYear}`;
// }
//class
class Student{
  constructor(firstName, lastName, roll, sex, age) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.roll=roll;
    this.sex=sex;
    this.age=age;
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear(){
    const birthYear = new Date().getFullYear() - this.age;
         return `NAME :${this.getFullName()}, D-O-B: ${birthYear}`;
  }
}


const student1 = new Student('Raj', 'Malik', 6, 'M', 24);
const student2 = new Student('Aman', 'Sahoo', 2, 'M',19);
const fullName = student1.age > student2.age ? student1.getFullName() : student2.getFullName();
console.log(fullName);
console.log(student1.getBirthYear());
console.log(student2.getBirthYear());

function eligibility(age) {
    const eli = age>15?'he is eligible':'he is not eligible';
    return eli;
}

console.log(eligibility(student1.age));
console.log(eligibility(student2.age));
console.log(student1);

