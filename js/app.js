const actualYear = 2021;

let myName = prompt("Ingrese su nombre");
let mylastName = prompt("Ingrese su apellido");
let yearOne = parseInt(prompt("Ingresa tu año de nacimiento"));
let oldCity = prompt("Ingrese la ciudad donde nació");
let myCity = prompt("Ingrese la ciudad donde vive");
let duration = parseInt(prompt("Hace cuantos años vive en esta ciudad"));
let age = actualYear - yearOne;
let ageOrigin = actualYear - duration;

alert("Hola " + myName + " " + mylastName + ", tu edad es " + age + " años" + " y vives en " + myCity + " desde el " + ageOrigin + ".")