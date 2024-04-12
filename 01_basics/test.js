// console.log("arnab saha");
// const accountId = 144553;
// let accountEmail = "thearnabsaha201@gmail.com";
// var accountPassword = "1234";
// accountCity="kolkata"; // we can also declare like this... don't do this.
// let accountState; // there is no value assigned so there won't be any value and it will show undefined.
// console.table([accountEmail,accountId,accountCity,accountPassword,accountState]); // we can console in tabluar format.
// // accountId=2;
// accountEmail="arnab@gmail.com";
// accountCity="123445";
// accountPassword='jaipur';
// console.log(accountId);
// console.table([accountEmail,accountId,accountCity,accountPassword,accountState]); 

// // prefer not to use var because of issue in block scope and functional scope

"use strict"; // treat all JS code as newer version.
// // alert(3+3);  // we are using node.js not browser so it won't work.
// let name = "arnab";
// let age = 22;
// let isLoggedIn =false;

// // number => 2 to power 53;
// // BigIntString => "";
// // Boolean => true/false;
// // null => standalone value;
// // undefinded => nothing;
// //symbol => unique;
// //object

// console.log(typeof(name)); // we use type of to know about the data types of the variable
// console.log(typeof(age));
// console.log(typeof(isLoggedIn));
// console.log(typeof(null)); // it will show object. it's a bug in java script


// let score = 21;
// let score = true; // gives 1
// let score = false; // gives 0
// let score = "arfe2121";   // typeof(Number(score)) would be number also! cause it provides NaN. not a number.


// console.log(typeof(score));
// console.log(score);

// let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

// //"33" => 33
// //"33abc" => NaN

// let isLoggedIn = {};
// console.log(isLoggedIn); 
// console.log(Boolean(isLoggedIn)); 
// // 1,2,-4,"arnab",[],{} => true; 0,NaN,null,undefined,=> false

// let someNumber =33;
// console.log(someNumber);
// console.log(String(someNumber));
// console.log(typeof(String(someNumber)));

// let value =3;
// console.log(-value);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// let str1="hello";
// let str2="world";
// console.log(str1+" "+str2);

// console.log(1+"2"); //12
// console.log(1+1+"2"); //22
// console.log("1"+2); //12
// console.log("1"+2 +2); //122 these are because of precedence rule

// // use parenthesis alot
// console.log(+true);
// // console.log(true+); //error
// console.log(-true);
// console.log(+"");

// // let num1 , num2, num3;
// // num1 =num2 =num3 =2+2;  //bad code

// console.log(3++); //prefix 
// console.log(++3); // postfix

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log(("2">1)); //true
// console.log(("02">1)); //true

// console.log(null > 0); //false
// console.log(null == 0); //flase
// console.log(null >= 0); //true
// console.log(null <= 0); //true

// console.log(undefined ==0); //false
// console.log(undefined >0); //false
// console.log(undefined <0); //false

// console.log("2"===2); //strict check //false 

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);
// console.log(anotherId==id);

// const bigNumber = 854273089574320925473905420n;

// console.log(bigNumber);

// // stack-memory (Primitive) // we get a value in this case
// //  Heap-memory (Non-Primitive); // we get a reference in this case

// //pass by value
// let myName = "arnab saha";
// let username =myName;
// console.log(myName);
// username="thearnabsaha";
// console.log(username);
// console.log(myName); // value is different

// // pass by reference 
// let arr1 = ["arnab","suborno","arijit"];
// let arr2=arr1;
// console.log(arr2);
// arr2.push("pratysha"); // it changes to original code.
// console.log(arr1);
// console.log(arr2); 

// let name="arnab saha";
// let age=22;
// console.log(`hello my name is ${name} and my age is ${age}`);
// console.log(name[1]);
// console.log(name.length);
// // console.log(name.toUppercase()); //we can't use this things here! so we use new property.
// // console.log(name.toLowerCase());

// let newName = new String("Arnab Saha");
// console.log(newName.toUpperCase());
// console.log(newName.toLowerCase());
// console.log(newName.charAt(2));
// console.log(newName.indexOf("b"));

// const subName = newName.substring(0,4);
// console.log(subName);

// const anotherSubName = newName.slice(-9,2);
// console.log(anotherSubName);

// const newStringOne ="        arnab          ";
// console.log(newStringOne.trim());

// const url ="https://arnab%20saha.com";
// console.log(url.replace("%20",""));
// console.log(url.includes("arn"));

// const words="arnab-saha-is-best";
// console.log(words.split("-"));

// const score =400;
// console.log(score);
// console.log(score.toString().length);
// console.log(score.toFixed(2)); // 2 values after decimel.
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);


// // ++++++++++++++++++++++++ Maths +++++++++++++++++++
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.5)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.2)); //4
// console.log(Math.sqrt(4)); //2
// console.log(Math.random()); // 0-1
// console.log(Math.floor(Math.random()*10)+1);

// const min =10;
// const max =20;

// console.log((Math.floor(Math.random()*(max-min+1)+min))); // formula to get random values from min to max


// let MyDate = new Date();
// // let MyDate = new Date(2023,0,21);
// // let MyDate = new Date("2023-01-14");
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.getDate());
// console.log(MyDate.getMonth()+1); // months starts with zero
// console.log(MyDate.getFullYear());
// console.log(MyDate.toLocaleString("default",{
//     weekday:"long",
//     day:"numeric"
// }));


// let myTimeStamp =Date.now();
// console.log(myTimeStamp);
// console.log(MyDate.getTime());


// const myArray = [1,2,4,true,"arnab",[1,2,43]];
// const myArray1 = new Array(1,2,4,4,5);
// // shallow copy = have only one reference points // all array's are shallow copy.
// console.log(myArray[2]);

// // methods of array
// myArray.push(6); //add element at last
// myArray.pop(); // remove the last element
// myArray.unshift(0); //add element at the first
// myArray.shift(); // remove element from first.
// console.log(myArray.includes(9)); // show is the value present there or not.
// console.log(myArray.indexOf(9)); // show the index or -1
// const newArr = myArray.join(); // makes all the values in string

// // slice and splice 
// const myn1 = myArray.slice(1,3); // it doesn't manipulate the original Array.
// console.log(myn1);

// const myn2 = myArray.splice(1,3); // it manipulates original array and removes the subArray.
// console.log(myn1);
// console.log(myn2);

// const marvel_heros = ["thor","spiderman","ironman"];
// const dc_heros = ["batman","superman","flash"]

// const allHeros= marvel_heros.concat(dc_heros); // makes a new array. with all elements.
// console.log(allHeros);
// marvel_heros.push(dc_heros); // add an array as 4th element
// marvel_heros.push(...dc_heros); //add the element of array in previous array. // spread oparetor. 
// console.log(marvel_heros);


// const newArr1 =[1,2,3,[2,4,5,6],[2,[2,5]]];
// console.log(newArr1.flat(1)); // flattens the array in the array // with depth.
// console.log(newArr1.flat(Infinity)); // here the depth is infinity

// console.log(Array.isArray("arnab")); // it will check is the element passed is an array or not.
// console.log(Array.from("arnab")); // it will make a array out of this elements.
// console.log(Array.from({name:"arnab"})); // it will give a empty array cause it can't make array from objects.

// let score1 =100;
// let score2 =200;
// let score3 =300;
// let score4 =400;

// console.log(Array.of(score1,score2,score3,score4)); // it will make a array out of variables.

// const mySym =Symbol("arnab")
// const jsUser={
//     "full name":"arnab",
//     age:22,
//     [mySym]:"arnab1",
//     location:"kolkata",
//     isLoggedIn:false,
//     daysActive:["monday","sunday"]
// };
// console.log(jsUser.age); //to get normal values
// console.log(jsUser["full name"]); // to get values from json like structure.
// console.log(jsUser[mySym]); // this is how you print the symbol

// jsUser.location ="kaliachak";
// // Object.freeze(jsUser); // you can't change the object after this.
// // jsUser.location ="malda";
// console.log(jsUser);

// jsUser.greetings = function(){
//     console.log(` Hello ${this["full name"]}`);
// } //this is how you can add functions in your objects
// console.log(jsUser.greetings());

// const user ={}; // non-singleton object.
// const user2 = new Object(); // singleton object.

// const pokemon ={
//     name:"keldeo",
//     types:{
//         primaryType:{
//             fire: true,
//             water:false
//         }
//     }
// };
// console.log(pokemon.types.primaryType.fire);   //object nesting

// const obj1 ={
//     name:"arnab",
//     rollnumer:25
// }
// const obj2 ={
//     work:"pwc",
//     role:"consultant"
// }
// const obj3 ={
//     age:23,
//     sex:"male"
// }
// const obj = {...obj1,...obj2,...obj3} //used spread operator to make it a object with all the values. // better one
// const objx = Object.assign({},obj1,obj2,obj3) //used assign to make it a object with all the values.
// console.log(objx); 

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const course ={
//     name:"react",
//     price:"999",
//     teacher:"arnab saha"
// };
// const {teacher}=course; // this is called object destructure. it's just a syntactical suger for writing code in a gpood looking way!
// const {teacher: t}=course; // here you have given a alias name for keys ie teacher.
// console.log(teacher);
// console.log(t);

// {                           //this is JSON
//     "name":"arnab saha",
//     "favPokemon":"victini"
// }

// [{                          //this is also a JSON. but it is a array of JSON.
//     "name":"arnab saha",
//     favPokemon:"victini"
// },{
//     "name":"pratyusha",
//     "favPokemon":"pikachu"
// }
// ]

// //go to JSON formatter website to understand about any apis

function add(a,b) {
    console.log(a+b);
}
add // refernce of a function
add(1,2)