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
