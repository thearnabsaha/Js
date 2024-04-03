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


let score = 21;
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

// stack-memory (Primitive) // we get a value in this case
//  Heap-memory (Non-Primitive); // we get a reference in this case

//pass by value
let myName = "arnab saha";
let username =myName;
console.log(myName);
username="thearnabsaha";
console.log(username);
console.log(myName); // value is different

// pass by reference 
let arr1 = ["arnab","suborno","arijit"];
let arr2=arr1;
console.log(arr2);
arr2.push("pratysha"); // it changes to original code.
console.log(arr1);
console.log(arr2); 