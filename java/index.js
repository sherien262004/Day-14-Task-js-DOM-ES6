
//part one (addeventlistener)
"use strict"
//mouseenter&&mouseleave
let box=document.querySelector(".box1");
document.addEventListener("mouseenter",function(){
    box.style.backgroundColor="red";
    box.style.height="200px";
})
document.addEventListener("mouseleave",function(){
      box.style.backgroundColor="green";
})

// //keyup&&keydown
let inputOne=document.getElementById("name");
inputOne.addEventListener("keydown",function(){
    console.log("you pressed on keyboard");
})
inputOne.addEventListener("keyup",function(){
    console.log("you release key");
})

// //focus&&blur
let inputTwo=document.getElementById("email");
inputTwo.addEventListener("focus",function(){
 inputTwo.style.backgroundColor="lightblue";
})

inputTwo.addEventListener("blur",function(){
  inputTwo.style.backgroundColor="blue";
   inputTwo.style.color="white";
})

//click
let formButton=document.querySelector(".btn");
formButton.addEventListener("click",function(){
 formButton.style.backgroundColor="lightblue";
 console.log("you click on buttom");
})

// //drag
let photo=document.querySelector("img");
photo.addEventListener("drag",function(){
    console.log("you can drag photo");
    photo.style.width="300px";
     photo.style.height="300px";
})

// //mousemove&&mouseup
let demo=document.getElementById("box3");
demo.addEventListener("mousemove",function(){
demo.style.backgroundColor="blue";
demo.style.height="200px";
demo.style.color="white";
demo.style.textAlign="center";
console.log("your mouse move on element");
})
demo.addEventListener("mouseup",function(){
demo.style.backgroundColor="red";
// demo.style.height="200px";
demo.style.color="white";
demo.style.textAlign="center";
console.log("your mouse leave element");
})

//doubleclick
let demoTwo=document.getElementById("demo2");
demoTwo.addEventListener("dbclick",function(){
demoTwo.style.textAlign="center";
demoTwo.style.fontSize="bold";
console.log("your double click on element");
})
//------------------------------------------------------------------------
//part two

var element = document.createElement("div");
document.body.appendChild(element)
element.setAttribute("class","sherien");
element.setAttribute("id","test");
var text = document.createTextNode("Hello every body");
element.appendChild(text); 
//-----------------------------------------------------------------------
var headings = document.querySelector("h1")
headings.classList.add("bg-danger");
headings.classList.add("demo_three");
headings.classList.remove("demo_three");
headings.classList.replace("test", "test_four");

// ---------------------------------------------------------------------
const Name="sherien sallam";
function check(Name, Age="Unknown", job="nothing") {
    console.log(`hello ${Name} your Age is ${Age} and your job  is ${job}`);
}
 check(Name,21,"developer");
//---------------------------------------------------------------------
let userOne = {
    Name: "hany",
    age: 30,
    job:"teacher"
}

let userTwo = {
    gender: "female",
    age:21,
    job:"doctor"
}

let user = {...userOne, ...userTwo}
console.log(user);

function test(...para){
    console.log(para);
}
test("sherien","ziad","mohamed");
//-----------------------------------------------------------

let person = {
    Name: "hany",
    age: 30,
    job:"teacher",
    city:"cairo",
salary:30000,
son:{
    fname:"mohamed",
    age:3
}
}
let { Name:User, age:Age,job:personJob,city:personCity,salary:personSalary } = person; 
console.log(User);
console.log(Age);
console.log(personJob);
console.log(personCity);
console.log(personSalary);
let { fname, age} = person.son;
console.log(fname);
console.log(age);
//---------------------------------------------------------------------------------------
let usersTwo = [
    {Name: "ahmed", age: 21,job:"doctor"},
    {Name: "ali", age: 21,salary:2000},
    {Name: "mohamed", age: 25,city:"fayoum"}
]

for (let user of usersTwo) {
    console.log(user);
}
//---------------------------------------------------------------------------------------------
let userThree = {
    fulltName: "sherien",
    age: 21,
    salary: 50000
}

for ( let k in userThree ) {
    console.log(k," ",user[k]);
}
// ---------------------------------------------------------------------------------------------------

let numsBefore = [100, 200, 300, 400];
let numAfter = [];
let result = numsBefore.map( function(num) {
    return num*10;
} )
console.log(result);


let usersThree = [
    {Name: "ahmed", age: 21,job:"doctor"},
    {Name: "ali", age: 21,salary:2000},
    {Name: "mohamed", age: 25,city:"fayoum"}
]

let userNames = usersThree.map( (user) => usersThree )
for (let user of usersThree) {
    console.log(user);
}
//-----------------------------------------------------------------------------------------------------
var users = [
    {Name: "ahmed", age: 22,job:"doctor"},
    {Name: "ali", age: 21,salary:2000,job:"teacher"},
    {Name: "mohamed", age: 25,city:"fayoum"}
]

let user_Name = users.filter( (user) => user.Name.includes("m"));
console.log(user_Name);
//-------------------------------------------------------------------------------------
var users = [
    {Name: "ahmed", age: 22,job:"doctor"},
    {Name: "ali", age: 21,salary:2000,job:"teacher"},
    {Name: "mohamed", age: 25,city:"fayoum"},
     {Name: "hany", age: 27,city:"giza"},
      {Name: "sherien", age: 25,city:"fayoum"}
]

let res = users.find( (user) => user.city=== "fayoum");
console.log(res);
let ind = users.findIndex( (user) => user.email === "test4@email.com" && user.password === "3020" )
console.log(ind);