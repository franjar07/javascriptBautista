let nombre = prompt("Ingresa tu nombre");
let vehiculo = parseInt(prompt("Ingresa el año del modelo de tu vehículo"));
let kilometros = parseInt(prompt("Ingresa el Kilometraje de tu vehiculo"));

if (kilometros<50000 && vehiculo >= 2017) {
    for (let i=10000; i<=150000; i=i+10000) {
        let revision = kilometros+i;
        alert ("Gracias "+nombre+","+" tu próxima revision es a los "+revision+" Kilometros.");
    }
} else {
    for (let i=5000; i<=150000; i=i+5000) {
        let revision = kilometros+i;
        alert("Gracias "+nombre+","+" tu próxima revision es a los "+revision+" Kilometros.")
    }
}