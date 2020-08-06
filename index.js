// Install extension "Live server"
// Right click on htlm file and select "Open with Live Server"
// On web, right click, options "Inspect"

let name = "Felix";
const interestRate = 0.3; // constant
// interestRate = 1
console.log(interestRate);
// -----------------------------
let firstName = undefined; // 
let secondName = null; // explicitly clear value
// -----------------------------
// Dynamic progrmming language example
let nombre = "Felix"
console.log(typeof nombre);
nombre = 1
console.log(typeof nombre);
// -----------------------------
// Object
let person = {
    name: "Felix",
    age: 27
};
console.log(person);

person.name = "xileF";
console.log(person);
// -----------------------------
// Array
let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);

// Multiple types allowed
selectedColors.push(99);
console.log(selectedColors);
// -----------------------------
// Functions
function square(number){
    return number * number;
}
console.log(square(3));