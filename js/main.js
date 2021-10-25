// peso a euro y dolar
function convertirPesoDolar(moneda)
{
    return moneda / dolarPeso; 
}

function convertirPesoEuro(moneda)
{
    return moneda / euroPeso; 
}

// dolar a peso y euro
function convertirDolarPeso(moneda)
{  
    return moneda * dolarPeso; 
}
function convertirDolarEuro(moneda)
{
    return moneda * dolarEuro; 
}

// euro a peso y dolar
function convertirEuroPeso(moneda)
{
    return moneda * euroPeso; 
}
function convertirEuroDolar(moneda)
{
    return moneda * euroDolar; 
}

// Variables
let pesos;
let dolares;
let euros;
let opcion;
let fecha = document.getElementById("fecha");
// Precios del cambio
let dolarPeso = 98.91;
let euroPeso = 114.28;
let dolarEuro = 0.87;
let euroDolar = 1.17;

// Constructor de objetos
function Cambio(nombre, valor){
    this.nombre = nombre;
    this.valor = valor;
}

// Objetos de las monedas
const cambio1 = new Cambio("dolar a peso", 98.91);
const cambio2 = new Cambio("euro a peso", 114.28 ); 
const cambio3 = new Cambio("dolar a euro", 0.87);
const cambio4 = new Cambio("euro a dolar", 1.17);

// Main del simulador
opcion = prompt("Escriba la moneda que desea convertir: \n-Pesos argentinos.\n-Dólares.\n-Euros").toLowerCase();

switch(opcion){
    case "pesos":
    case "pesos argentinos":
        pesos = parseFloat(prompt("Ingrese cúantos pesos quiere convertir."));
        document.getElementById("pesos").value = pesos.toFixed(2);
        document.getElementById("dolares").value = convertirPesoDolar(pesos).toFixed(2);
        document.getElementById("euros").value = convertirPesoEuro(pesos).toFixed(2);
        break;

    case "dólares":
    case "dolares":
    case "dólar":
    case "dolar":
        dolares = parseFloat(prompt("Ingrese cúantos dólares quiere convertir."));
        document.getElementById("pesos").value = convertirDolarPeso(dolares).toFixed(2);
        document.getElementById("dolares").value = dolares.toFixed(2);
        document.getElementById("euros").value = convertirDolarEuro(dolares).toFixed(2);
        break;
    
    case "euros":
    case "euro":
        euros = parseFloat(prompt("Ingrese cúantos euros quiere convertir."));
        document.getElementById("pesos").value = convertirEuroPeso(euros).toFixed(2);
        document.getElementById("dolares").value = convertirEuroDolar(euros).toFixed(2);
        document.getElementById("euros").value = euros.toFixed(2);
        break;
    
    default:
        alert("Ingresaste una opción incorecta. Vuelve a intetarlo.");
        break;
}

fecha.innerText = new Date().toLocaleDateString();



