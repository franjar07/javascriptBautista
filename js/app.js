const actualYear = 2021;
let myName = prompt("Ingrese su nombre");
let yearOne = parseInt(prompt("Ingresa tu año de nacimiento"));
let age = actualYear - yearOne;
if (age<18) {
    alert("Hola " + myName + ", debes ser mayor de edad para ingresar a este sitio")
} else {
    let city = prompt("Por favor ingrese su ciudad de residencia");
    if ((city == "Bogotá") || (city == "Bogota") || (city == "bogotá") || (city == "bogota")) { alert("Bienvenido " + myName + ". Gracias por registrarte")
    } else {
        alert("Debe residir en Bogotá para poder participar");
    }
}