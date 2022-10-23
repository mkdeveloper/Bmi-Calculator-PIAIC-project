import promptSync from "prompt-sync";

const promptHeight = promptSync();
const promptWeight = promptSync();

let heightInches = promptHeight("Please Enter Your Height in INCHES! : ");
let weightPounds = promptWeight("Please enter your weight in POUNDS! : ");

let heightCm = heightInches * 2.54;
let weightKg = weightPounds / 2.2064;

console.log("The weight in Kilo is: " + weightKg);
console.log("The height in Cm is: " + heightCm);

let heightMeter = heightCm / 100;
let bmi = weightKg / heightMeter ** 2;

console.log("The Bmi is: " + bmi);
