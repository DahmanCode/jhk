// Assignment 1 :

let userName = "Elzero";
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName.slice(-6, -5).toLocaleLowerCase()); // e
console.log(userName.substring(userName.length - 6, userName.length - 5).toLocaleLowerCase()); // e
console.log(userName.substr(0, 1).toLocaleLowerCase().repeat(3)); // eee

// Assignment 2 :

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True