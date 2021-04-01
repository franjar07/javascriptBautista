function descuentos(pCompra, pDescuento, pCalculo) {
    let resultado = 0;
    switch (pCalculo) {
        case "compensar":
            resultado = (pCompra - (pCompra * pDescuento))
            break;
        case "colsubsidio":
            resultado = (pCompra - (pCompra * pDescuento))
        case "policia":
            resultado = (pCompra - (pCompra * pDescuento))
        case "cafam":
            resultado = (pCompra - (pCompra * pDescuento))
        case "No":
            resultado = (pCompra - (pCompra * pDescuento))  
        default:
            break;
    }
    return resultado;
}

let nombre = prompt("Ingrese su nombre");
let deuda = parseInt(prompt("Ingrese el valor de su deuda"))
let convenio = prompt("¿Tiene alguno de estos convenios? Compensar, Policia, Colsubsidio, Cafam. Indique Si o No.");

if (convenio=="No") {
    alert("Gracias " + nombre + " el valor de su deuda es " + descuentos(deuda,0,"No"));
} else {
    let convenioType = prompt("Ingrese el nombre de su convenio");
    while(convenioType != " ") {
        switch (convenioType) {
            case "compensar":
                alert("Gracias " + nombre + " por ser miembro de " + convenioType + " el valor de su deuda es " + descuentos(deuda,0.05,convenioType));
                break;
            case "colsubsidio":
                alert("Gracias " + nombre + " por ser miembro de " + convenioType + " el valor de su deuda es " + descuentos(deuda,0.1,convenioType));
                break;
            case "policia":
                alert("Gracias " + nombre + " por ser miembro de " + convenioType + " el valor de su deuda es " + descuentos(deuda,0.2,convenioType));
                break;
            case "cafam":
                alert("Gracias " + nombre + " por ser miembro de " + convenioType + " el valor de su deuda es " + descuentos(deuda,0.15,convenioType));
                break;
            default:
                alert("No ingresaste el nombre de tu convenio");
                break;
        }
        convenioType = prompt("Debes ingresar un convenio");
    }
}