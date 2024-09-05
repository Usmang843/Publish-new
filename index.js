"use strict";

// alert(3 + 3); // we are using nodejs, not browser

// console.log(3 + 3);
// console.log(typeof null)

let txt = "33x"; // return NaN and type is number when convert to number
// console.log(typeof txt);

let vtxt = Boolean(txt);
// console.log(typeof vtxt);

// console.log(vtxt)

// console.log(+vtxt)

// console.log("02" > 1)
// substring(), slice(), trim(), includes(), split()

const bal = new Number();
// console.log(bal)
// Math.round(), ceil(), floor(), abs(), min(), max()

// console.log((Math.random()*100) + 1)

const min = 10,
  max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// let newDate = new Date()
// console.log(newDate.toLocalString())

const myArr = [0, 1, 2, 3, 4, 5, 6];

// console.log(myArr[4])
myArr.push(7);
myArr.pop(7);
myArr.unshift(4);
myArr.shift();
myArr.indexOf(3);
// console.log(myArr)

const newArr = myArr.join(); // converts an array to string

// console.log("A", myArr)

const myn1 = myArr.slice(1, 3);

//console.log(myn1)

// console.log("B", myArr)
const myn2 = myArr.splice(1, 3);
// console.log(myn1)

const arr = [1, 2, 3, 4],
  arrn = [5, 6, 7, 8];
const allarr = arr.concat(arrn); // new array with concat elements
// console.log(allarr);

const allnarr = [...arr, ...arrn]; // same as concat
// console.log(allnarr);

const anotharr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realarr = anotharr.flat(Infinity);
// console.log(realarr)

// console.log(Array.from("Usman"))
// console.log(Array.from({name:"Usman"})) // []
let i = 1,
  j = 2,
  k = 3;
// console.log(Array.of(i,j,k))

const mySym = Symbol("key"); // create symbol and make as key value pair

const obj = {
  "full Name": "usmaUrRehman",
  [mySym]: "mykey", // symbol as key value pair syntax
  name: "usman",
  age: 23,
  location: "lahore",
  email: "usman1urrehman2@gmail.com",
};
// console.log(obj.email)
// console.log(obj[mySym])
// console.log(typeof obj[mySym])

// Object.freeze(obj)

obj.greeting = function () {
  console.log("Hello Usman!");
};
// console.log(obj.greeting) // [function]
// console.log(obj.greeting())

obj.greetingtow = function () {
  console.log(`Hello ${this["full Name"]}!`);
};
// console.log(obj.greetingtow())

const newobj = {
  name: "usman",
  age: 23,
};
const apnewobj = {
  email: "usman1urrehman2@gmail.com",
  fullName: {
    userfullName: {
      fname: "usman",
      lname: "ur rehman",
    },
  },
};

// console.log(newobj.fullName?.fname) // ? if fullname not exist
// console.log(apnewobj.fullName.userfullName.fname)

const obj1 = { name: "Usman", age: 23 };
const obj2 = { location: "lahore", email: "usman1urrehman2@gmail.com" };

// const obj3 = {obj1,obj2} // return objects in objects
// merging Objects
// const obj3 = Object.assign({}, obj1, obj2) // {} is optional and as targer is {} and remaining is sources
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3)

// const singletonObj = new Object()
const literalObj = {};
literalObj.id = 786422;

// console.log(literalObj)

const user = [
  {
    name: "usmanUrRehman",
    email: "usman1urrehman2@gmail.com",
  },
  {
    name: "usmanUrRehman2",
    email: "usman1urrehman2@gmail.com",
  },
  {
    name: "usmanUrRehman3",
    email: "usman1urrehman2@gmail.com",
  },
  {
    name: "usmanUrRehman4",
    email: "usman1urrehman2@gmail.com",
  },
];

// console.log(obj)

// console.log(Object.keys(obj))// return keys
// console.log(Object.values(obj))  // return values
// console.log(Object.entries(obj))    // retu/rn array of array in which every key and value in separate array as 0, 1 respectively
// console.log(obj.hasOwnProperty('name')) // return true and false

const course = {
  coursn: "English",
  price: "20000",
  courseInstr: "Usman",
  course1: {
    coursn: "English",
    price: "20000",
    courseInstr: "Usman",
    course2: {
      coursn: "English",
      price: "20000",
      courseInstr: "Usman",
    },
    course3: {
      coursn: "English",
      price: "20000",
      courseInstr: "Usman",
    },
  },
};
// course.courseInstr
// destructure the objects to get values by
const {
  courseInstr,
  price,
  course1,
  course1: { course2 },
  course1: { course3: corsn },
} = course; // return the value by creating the key outside the obj
const { courseInstr: instr } = course; // return the value by creating the key outside the obj as new name
// console.log(corsn);

// {
//     name: "Usman",
//     coursen: "urdu",
//     price: "free"
// }

function myfn() {
  console.log("U");
  console.log("S");
  console.log("M");
  console.log("A");
  console.log("N");
}
// console.log(myfn) // return reference
// myfn()

function addn(n1, n2) {
  // console.log(n1 + n2)
  return n1 + n2;
  // console.log(n1 + n2) // will not give anaything after return
}
// addn()// return NaN
// addn(4,3)// 7
// addn(3, '4') // concatenate
// addn(3, 'a') // also concatenate

const result = addn(4, 3); // return 7
// console.log("Result", result) // returns undefined when there is no use of return

function loginUser(usrn) {
  // can give default value without any checkcheck
  // if(usrn === undefined){
  //   console.log("please enter a username")
  //   return
  // }
  if (!usrn) {
    console.log("please enter a username");
    return;
  }
  return `${usrn} logged in`;
}

// loginUser("Usman") cannot return value because there is not taking value of return and not console

// console.log(loginUser())// returns undefined of value
// console.log(loginUser(""))
// console.log(loginUser())
// console.log(loginUser("ur"))

// function calprice(...n1){ // rest opertor
//   return n1
// }
function calprice(v1, v2, ...n1) {
  // rest opertor
  return n1;
}
// console.log(calprice(4, 2, 6, 8)); // rest operator returns an array of values given by parameters
// console.log(obj)
function hndlObj(hobj) {
  // console.log(`Username is ${hobj.name} and age is ${hobj.age}`)
  console.log(`Username is ${hobj.name} and age is ${hobj.age}`); // check if the objects getting is not available
}
// hndlObj(obj);
// hndlObj({name: "usmanUrRehman",age: 23})

const nArr = [1, 2, 3, 4];
function returnnArrV(getarv) {
  return getarv;
}

// console.log(returnnArrV(nArr));
// console.log([5,6,7,8])

// Scoping
function oneusr() {
  const usrname = "uSMAN";
  function TWOusr() {
    const usrnametwo = "uSMAN";
    console.log(usrname);
  }
  // console.log(usrnametwo)
  TWOusr();
}

// oneusr() //  console.log(usrnametwo) //error

if (true) {
  const usrname1 = "uSMAN";
  if (usrname1 === "uSMAN") {
    const websit = "usman1urrehman2@gmail.com";
    // console.log(usrname1  + " " + websit)
  }
  // console.log(websit);
}
// console.log(usrname1);

//
// console.log(addone(5)); // didn't give error abouve the declaration in function
// console.log(addTwo(5)); // error because function assign to the variable is called the hoisted

function addone(val) {
  // is a simple function
  return val + 1;
}
const addTwo = function (val) {
  // is an expression in which given the value
  return val + 2;
};
// console.log(addone(5));
// console.log(addTwo(5));

//  ******this******

// console.log(obj)

obj.welcomeMessage = function () {
  console.log(`${this.name} welcome to website `);
  // console.log(this) // return the obj
  // this reference to obj
};
// obj.welcomeMessage();
// obj.name = "ur"
// obj.welcomeMessage()

// console.log(this) // return {}

// function thisfun(){
//   console.log(this)
// }
// let thisfun = function(){
// console.log(this)
// // }
// let thisfun = () =>{ // in arrow function this returns {} but not is same for simple or expression function
//   console.log(this)
// }

// thisfun(); // this keyword in the function returns undefined

// Arrow function syntax is () => {}
const addthree = (n1, n2, n3) => {
  return n1 + n2, n3;
};
const addthreearrow = (n1, n2, n3) => n1 + n2 + n3;
const addthreearrowR = (n1, n2, n3) => {
  return n1 + n2 + n3;
}; // use curly braces for other values if use {} there must be use of return for value
const addthreearrowWR = (n1, n2, n3) =>
  ({ name: "usman" }(
    // use curly braces for other values
    // console.log(addthreearrowR(4,2, 6))

    // Immediately Invoked Function Expression IIFE // global scope pollution // is invoked without separe call by function name
    // below function is not executing because there is above statement where semicolon(;) is not entered
    function iifeFn() {
      console.log(
        "check the immediate function is called when the programs is run"
      );
    }
  )()(
    // iife syntax is () function defination and () function call which ()()

    () => {
      console.log("check the arrow function");
    }
  )()); // arrow iife function can also execute but only reminder semicolo(;)
// ;((name)=>{console.log(`parameterized iife by ${name}`)})("usman");

// Javascript execution Context
// Global Execution // this
// {} memory creation phase // var, declarations allocate space
// Execution phase // logics multiplications

let val1 = 10,
  val2 = 5;
function addval(val1, val2) {
  let total = val1 + val2;
}
let resultaddval = addval(val1, val2);
let resultaddval2 = addval(10, 2);

// Global Execution: // this
// Memory phase: va1-> undefined, val2-> undefined, addval->definition, resultaddval-> undefined, resultaddval2-> undefined
// execution phase: va1-> 10, val2-> 5,
//addval->executional content(new variable environment+ execution thread)->
// extends[memoryphase[val1->undefined, val2->undefined, total->undefined], executionphase[va1->10,val2->2, reutrn of fn->total->15[this]]], resultaddval-> undefined

// Call stack  LIFO

// control flow
const isLoggedIn = true;
if (isLoggedIn) {
  // console.log("user is logged in");
}

// 3!=2 // true, 2!==3 , 2=="2" // ture, 2 === "2" // false, &&, ||,
// false === 0 ->true, false == ''->true, 0 == ''->true
const bln = 1;
// if(bln >0) console.log("number is greate than 0"),
// console.log("number is greate than 0") it works with (,)

const month = 3;
/*switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("faburary");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("default value ");
    break;
}
*/
// falsy values-> false, 0, -0, BigInt->0n, '', null, undefined, Nan
// all other than falsy will be true-> '0', "false", ' ',[],{}, function(){}

if (Object.keys(obj).length === 0) {
  // console.log("Object is empty")
} else {
  // console.log("Object is not empty")
}
// Nullish Coalescing operator (??) null, undefined
let val4;
// val4 = 4 ?? 6 // 4
val4 = null ?? 4; // return 4 if null or undefined
val4 = undefined ?? 4; // return 4 if null or undefined
val4 = undefined ?? 4 ?? 10; // return 4

// val4 = null ?? function(){} // can use fnction

// console.log(val4);

// Terniary Operator -> condition ? true:false
// val4 === 4 ? console.log("val is 4") : console.log("val is not 4");

// loops or iterations

for (let i = 1; i <= 4; i++) {
  let element = i;
  if (element == 4) {
    // console.log("4 is the lucky number")
  }
  // console.log(element)
}
for (let i = 1; i < 4; i++) {
  // console.log(`outer loop value: ${i}`);

  for (let j = 1; j < 4; j++) {
    // console.log(`inner loop value: ${j}`);
    // console.log(i + '*' + j + ' = '+ i * j);
  }
}
let myarray = ["usman", "ur", "rehman"];

for (let index = 0; index < myarray.length; index++) {
  const element = myarray[index];
  // console.log(element)
}

for (let index = 1; index <= 20; index++) {
  5;
  if (index == 5) {
    // console.log("Detected 5");
    break;
  }
  // console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  5;
  if (index == 5) {
    // console.log("Detected 5");
    continue;
  }
  // console.log(`Value of i is ${index}`);
}
let index = 0;
// while(index <10){
// console.log(`Value of index is ${index}`)
// index = index + 2
// }
// while(index < myarray.length){
// console.log(`Value is ${myarray[index]}`);
// index++
// }
do {
  // console.log(`My name is ${myarray[index]}`);
  index++;
} while (index < myarray.length);

//  loops use only for array, ["","",""], [{},{},{}]

// console.log(myarray)

for (const name of myarray) {
  // gives the values of array at indexes
  // console.log(name);
}

const myName = "Hello Usman Ur Rehman!";
for (const name of myName) {
  // console.log(name);
}

// Maps in Javascript

const map = new Map();
map.set("fname", "usman");
map.set("mname", "ur");
map.set("lname", "rehman");

// console.log(map)
for (const [keys, vals] of map) {
  // console.log(keys,':-', vals);
}
// console.log(obj);

// for (const [keys, vals] of obj) { // objects is not iterable in for of loop
//   console.log(keys, ':-',vals);

// }

// for (const key in obj) {
// console.log(key);
//   console.log(`${key} shortcut is for ${obj[key]}`);
// }

// console.log(myarray);

for (const key in myarray) {
  // console.log(myarray[key]);
}

// console.log(map)

for (const key in map) {
  // console.log(key);
}

// console.log(myarray);

// myarray.forEach(function (){}) is callback function didn't have name

myarray.forEach(function (item) {
  // console.log(item);
});

myarray.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

function print(item) {
  // console.log(item);
}
// myarray.forEach(print);

const objarr = [
  {
    name: "Usman",
    email: "usman1urrehman2@gmail.com ",
  },
  {
    name: "ur",
    email: "usman1urrehman2@gmail.com ",
  },
  {
    name: "rehman",
    email: "usman1urrehman2@gmail.com ",
  },
  {
    name: "abdul Rasheed",
    email: "usman1urrehman2@gmail.com ",
  },
];

objarr.forEach((item, index, arr) => {
  // console.log(item);
});

// console.log(myarray)

const val = myarray.forEach((item) => {
  // not returning an item value
  // console.log(item);
  // return item
});
// console.log(val)

// console.log(myArr);
// console.log(myarray);

// const numg4 = myArr.filter((num)=> num > 4)
// const numg4 = myArr.filter((num)=> {num > 4}) // returns empty array
// const numg4 = myArr.filter((num)=> {return num > 4}) // always use return statement

// console.log(numg4);

const numg4 = [];
myArr.forEach((item) => {
  if (item > 4) {
    numg4.push(item);
  }
});
// console.log(numg4);

const book = [
  {
    title: "book 1",
    genre: "non-fiction",
    publish: 1980,
    edition: 1970,
  },
  {
    title: "book 2",
    genre: "fiction",
    publish: 1999,
    edition: 1985,
  },
  {
    title: "book 4",
    genre: "primary-fiction",
    publish: 1984,
    edition: 1956,
  },
  {
    title: "book 4",
    genre: "b-fiction",
    publish: 1980,
    edition: 1971,
  },
];

// const usrbook = book.filter((item)=>item.genre === 'fiction')
// const usrbook = book.filter((item)=>item.edition > 1970)
const usrbook = book.filter((item) => {
  return item.edition > 1971 && item.genre === "fiction";
});

// console.log(usrbook);

// console.log(myArr);
// const newNum = myArr.map((num)=> num + 10)
const newNum = myArr.map((num) => {
  return num + 10;
});
// console.log(newNum)

const newNumber = myArr // chaining of an array
  .map((num) => num * 10) // multiply by 10
  .map((num) => num + 1) // num is plus 1
  .filter((num) => num > 41); // check condition and return
// console.log(newNumber)

// console.log(myArr)

const totalArr = myArr.reduce((acc, currVal) => {
  // console.log(`acc: ${acc} and currVal: ${currVal}`);

  return acc + currVal;
}, 2);
// console.log(totalArr);

const shoppingCart = [
  {
    itemName: "shoe",
    price: 1500,
  },
  {
    itemName: "T-Shirt",
    price: 750,
  },
  {
    itemName: "cap",
    price: 150,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(priceToPay)timeout

/**************** Promise is an object representing the eventual completion or failure of an asynchronous operation
 *  ******************/

const promise1 = new Promise(function (resolve, reject) {
  // Do an async task-> DB calls, cryptography, network

  setTimeout(() => {
    // console.log("aync task 1 is completed");
    resolve();
  }, 1000);
});
promise1.then(() => {
  // console.log('Promise consumed');
}); //direction connection to resolve
// Below is same as above but there is difference where we don't separetely defined then

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  // console.log("Async 2 Resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "usman", email: "usman1urrehman2@gmail.com" });
  }, 1000);
}).then(function (user) {
  // console.log(user)
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({ name: "usman", password: "usman123" });
    } else {
      reject("Error: Somethig went wrong");
    }
  }, 1000);
});

const usrname = promise4
  .then((usr) => {
    // console.log(usr); // returns error because of rejection err is ture and return obj which is
    // passed through resolve
    // console.log(usr.name);
    return usr.name;
  })
  .then((name) => {
    // console.log(name);
  })
  .catch(function (err) {
    // console.log(err);
  })
  .finally(() => {
    // console.log('The Promise is either resolved or rejected successfully ' ); // default final
  });
// console.log(usrname);

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve({ name: "javacript", password: "1234" });
    } else {
      reject("Error: JS went wrong!");
    }
  }, 1000);
});

async function consumedPromise5() {
  try {
    // is working as then() which is resolved
    const response = await promise5; // promise5 is an object, async await doesn't catch error directly
    // console.log(response);
  } catch (error) {
    // is working as catch() which is rejected
    // console.log(error);
  }
}

consumedPromise5();

async function getAllUsr() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);

    const data = await response.json();
    // const data = response.json(); without await it return only promise which is pending
    // console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
getAllUsr();
