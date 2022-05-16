// 1. I wrote file and variable names in curly braces {} for clarity, skip them while naming

// 2. clone this repo to your pc

// 3. create a folder named { utils } in this folder with an { index.js } files in it

// 4. declare 4 variables using 4 ways allowed in JS containing values of 4 different data types in /utils/index.js
const name = "Anya";
let age = 18;
let isMarried = false;
var undef;

// declare 3 functions doing addition, subtraction and multiplication of 2 numbers using 3 ways allowed in JS in /utils/index.js
// 1 way
const sum1 = function(num1, num2){
    return num1 + num2;
}
const sub1 = function(num1, num2){
    return num1 - num2;
}
const mul1 = function(num1, num2){
    return num1 * num2;

// 2 way
 function sum2 (num1, num2){
     return num1 + num2;
}
    
function sub2 (num1, num2){
    return num1 - num2
}
    
function mul2 (num1, num2){
     return num1 * num2
}
// 3 way
const sum3=(num1, num2)=>{return num1 + num2}
const sub3=(num1, num2)=>{return num1 - num2}
const mul3=(num1, num2)=>{return num1 * num2}
// declare an object { utils } with a method to divide 2 numbers in /utils/index.js
export const utils = {
         divide(num1, num2){
        return num1 / num2;
    }
}
// add the 3 functions created outside of the { utils } object to the object without re-creating them
 utils.multiply = multiply;

 // add a method { curry } to the object { utils } that takes a function taking multiple argumets and returns a function that can take the same amount of arguments one at a time in /utils/index.js
utils.curry=function(argumentsFunc){
    return function returnedFunc (...args){
        if ( args.length>=argumentFunc.length){
            return argumentFunc.apply (this,args);
        }
        return function(...newArgs){
            return returnedFunc.apply(this,[...args,...newArgs]);
        };
    };
};
const curriedAdd3=utils.curry(add3);

 // export the object utils using both named and default export methods
  export default utils;


// partially apply number 2 to the basic math methods of the object utils using the { curry } method of the same object and save them in 4 new variables 
 const add_two = (num)=>{return num + 2}
 const mul_two=(num)=>{return num * 2}
 const sub_two=(num)=>{return num - 2}
 const div_two=(num)=>{return num / 2}
   console.log(curry(CurriedGcd)()(12))
   console.log(curry(add_two)(5))
 // create an array of numbers 1 to  10 using the { range } method of the object { utils } in /index.js
 let range10=range(1,10);
 range10;

 // apply the 4 partially applied functions to the newly created array and save the results to 4 new variables in /index.js
arr1  = arr.map(add_two)
arr2 = arr.map(mul_two)
arr3 = arr.map(sub_two)
arr4 = arr.map(div_two)
// log to the console the results of those 4 variables in index.js
 console.log(arr1)
 console.log(arr2)
 console.log(arr3)
 console.log(arr4)
 
//create a factory function { Person } that takes a name, a last name and an age and returns a new person when called 

function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
// create another factory function called { Student } that inherits from { Person } with additional argument { University } and returns a new student when applied in /students.js
function student  ( firstName, lastName, age, university){

    person.call(this, firstName, lastName, age )

    this.university = university;

 }
 const stud =  new createStudent("Anya", "Gasparyan", "18", "rau" )
 console.log(stud.firstName)
 
