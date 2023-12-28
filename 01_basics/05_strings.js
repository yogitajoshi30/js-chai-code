const name = "yogita";
const repoCount = 50;

// console.log(name + repoCount + " Value"); old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //new way

const gameName = new String("yogita-yj-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(2, 11);
console.log(anotherString);

const newStringOne = "   yojo    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yojo.com/yogita%20joshi";

console.log(url.replace("%20", "-"));

console.log(url.includes("sonali"));

console.log(gameName.split("-"));
