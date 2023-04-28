/*document.write({ name: "Johan" });
alert({ name: "Johan" });
console.log({ name: "Johan" }); */

// Statment & Comment 1:04:17
// I woke up early him today.
// statements - sets of instructions
// comment shortcut command Ctrl + L

// this is the console statment
/*console.log("Hey How are you");
console.log("hi i am john");
console.log("what are you doing there");
console.log("nothing");*/

// Variable 1:16:20
/* let name = "JOHAN SHRIMP TACO V";
document.write(name);
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
// Assign value
let address, zip, state;
address = "101 main branch";
zip = "53700";
state = "lahore";
name = "testing phase";
console.log(address, zip, state);
console.log(name); 
let $Fullname12_11_$="Random";
console.log($Fullname12_11_$); */

// Const, Let, Var 1:35:36
// Using var
/* var name_1 = "Peter";
name_1 = "Johan";
console.log(name_1);
// Using let
let lastname = "Ekelund";
lastname = "Peter"
console.log(lastname);
// Using const (Constant) - can't re-assign
const fixed = "Never Changed";
console.log(fixed); 
const name = "johan's courses are the best";
console.log(name); */

// String Concatenation - combine string value 1:46:43
// - backticks (template strings) easir option.
/* const first1 = "Peter";
const last2 = "Ekelund";
let fullname = first1 + " " + last2;
console.log("Hey your full name is : " + fullname);
document.write(fullname);

const website = "google";
const site = "https://www." + website + ".com";
console.log(site); */

// Number Basics 1:52:08
/* const number0 = 25;
const number = 64;
const number1 = "75"; // If we enclose a number in quotation marks, it will always be considered as a string and will not retain its numerical value.
let number2 = 57;
let number3 = 79.85;
const add = number0 + number;
const div = number2 / number3;
const min = number0 - number3;
const multi = number * number2;
console.log(add);
console.log(div);
console.log(min);
console.log(multi);
console.log(number1); */

// Numbers - Additional Features 2:00:29
// +=, -=, /=, *=, ++, --, %
// Modulus % operator returns the remainder after interger division
/* let num = 50; // +=
num += 5;
num += 5;
num += 5;
num += 5;
console.log(num);

let num1 = 80; // +=
num1 -= 5;
num1 -= 5;
num1 -= 5;
num1 -= 1;
console.log(num1);

let num2 = 60; // /=
num2 /= 5;
console.log(num2);

let num3 = 50; // *=
num3 *= 7;
console.log(num3);

let num4 = 52; // ++
num4++;
num4++;
num4++;
num4++;
console.log(num4);

let num5 = 52; // --
num5--;
num5--;
console.log(num5);

const slices = 10; // % modulus
const childern = 3;
const amount = slices % childern;
console.log(amount);
const snacks = 10; // % modulus
const childerns = 4;
const amounts = snacks % childerns;
console.log(amounts);

const random = 5 + 6 + 10 * 8;
const random2 = (5 + 6 + 10) * 8;
console.log(random);
console.log(random2); */

// Implicit Type Conversion 2:08:53
/*const name2 = "Johan";
const last2 = "Jordan";
const fulname = name2 + " " + last2;
console.log(fulname);
const value = name2 - last2;
console.log(value);

const num2 = 10;
const num3 = 25;
const totalnum = num2 + num3;
console.log(totalnum);

const num4 = 10;
const num5 = "43";
const totalnum1 = num4 + num5;
console.log(totalnum1);

let num6 = 15;
let num7 = 25;
num7 = "45";
const totalnum2 = num6 + num7;
console.log(totalnum2);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("num12").value;
  value = parseInt(value);
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
}); */

// Data Types - 7 total
// Primitive - string, number, boolean, null, undefined, symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof vlue)

// String
const str1 = "Haider";
// Number
const numb = 67;
// Boolean
let bool = true;
let bool1 = false;
// Null
const nulled = null;
// Undefined
let nam1;
// Symbol
console.log(typeof str1);
console.log(typeof numb);
console.log(typeof bool);
console.log(typeof bool1);
console.log(typeof nulled);
console.log(typeof nam1);
console.log(typeof "ali");
console.log(typeof 55);
console.log(typeof true);
console.log(typeof null);
