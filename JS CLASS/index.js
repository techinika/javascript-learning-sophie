console.log("Hello World!");

// This is a comment
/*
 This is multi-line comment
*/

// VARIABLES

let a, b; // variable declaration
a = 5; // variable initialization

let c = 30; // declaration and initialization
c = c + 1000;
c = 1030;

const PI = 22 / 7;

let numberone = 1;
let numberOne = 1; // Camel case
let number_one = 2; // snake style
let NumberOne = 1; // Pascal case

// DATA TYPES

/**
 * NUMBER (INTEGER, FLOATS)
 */
let p = 15;
/**
 * STRING
 * \: escape character
 */
let str =
  "This is the list of stadiums in Rwanda:\n1. Amahoro Stadium\n2. Pele Stadium\n3. Ubworoherane"; // Double Quote
let str1 = 'Rujugira yaravuze ngo,"Ntabyera ngo de!"'; // single quote
let sarah = "Sarah";
let name = "Kagambage"; //
let greeting = "Hello, " + sarah;

let str2 = `This is the list of stadiums in Rwanda:
1. Amahoro Stadium
2. Pele Stadium
3. Ubworoherane

This list was provided by ${name + " " + sarah}
`; // backticks
/**
 * BOOLEAN (true, false)
 */
let status = true;
/**
 * OBJECT (ARRAYS, MAPS, SETS, etc)
 * Properties (features), methods (behaviors)
 * Person: props (clothing, height, face, weight, shoes, scar, hair), methods (eating, speak, run)
 */
let person = {
  height: 170,
  face: "inzobe",
  scar: true,
  shoes: true,
};
/**
 * UNDEFINED & NULL
 */
let un;
un = un * 3;
/**
 * SYMBOL
 */

console.log(typeof "15");
console.log(str);
console.log(str1);
console.log(greeting);
console.log(str2);
console.log(status);
console.log(un, typeof un);
console.log(typeof person);
console.log(person.face);

// INTERACTING WITH USERS

// alert(status);
let age = prompt();
