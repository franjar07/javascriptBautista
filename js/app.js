// const actualYear = 2021;

// let myName = prompt("Ingrese su nombre");
// let mylastName = prompt("Ingrese su apellido");
// let yearOne = parseInt(prompt("Ingresa tu año de nacimiento"));
// let oldCity = prompt("Ingrese la ciudad donde nació");
// let myCity = prompt("Ingrese la ciudad donde vive");
// let duration = parseInt(prompt("Hace cuantos años vive en esta ciudad"));
// let age = actualYear - yearOne;
// let ageOrigin = actualYear - duration;

// alert("Hola " + myName + " " + mylastName + ", tu edad es " + age + " años" + " y vives en " + myCity + " desde el " + ageOrigin + ".")

let name = prompt("Ingrese su nombre");
let convenio = prompt("¿Tiene alguno de estos convenios? Compensar, Policia, Colsubsidio, Cafam. Indique Si o No.");

if (convenio=="Si") {
    let convenioType = prompt("Ingrese el nombre de su convenio");
} else {
    alert("no tiene convenios");
}