// peso a euro y dolar
function convertirPesoDolar(moneda)
{
    return moneda / cambio1.valor; 
}

function convertirPesoEuro(moneda)
{
    return moneda / cambio2.valor; 
}

// dolar a peso y euro
function convertirDolarPeso(moneda)
{  
    return moneda * cambio1.valor; 
}
function convertirDolarEuro(moneda)
{
    return moneda * cambio3.valor; 
}

// euro a peso y dolar
function convertirEuroPeso(moneda)
{
    return moneda * cambio2.valor; 
}
function convertirEuroDolar(moneda)
{
    return moneda * cambio4.valor; 
}

// Constructor de objetos
function Cambio(nombre, valor){
    this.nombre = nombre;
    this.valor = valor;
}

// Objetos de las monedas
const cambio1 = new Cambio("dolar a peso", 100.35);
const cambio2 = new Cambio("euro a peso", 113,57 ); 
const cambio3 = new Cambio("dolar a euro", 0.88);
const cambio4 = new Cambio("euro a dolar", 1.13);

// objetos a JSON
const cambio1JSON = JSON.stringify(cambio1);
const cambio2JSON = JSON.stringify(cambio2);
const cambio3JSON = JSON.stringify(cambio3);
const cambio4JSON = JSON.stringify(cambio4);

localStorage.setItem("cambio1", cambio1JSON);
localStorage.setItem("cambio2", cambio2JSON);
localStorage.setItem("cambio3", cambio3JSON);
localStorage.setItem("cambio4", cambio4JSON);

// Variables
let pesos;
let dolares;
let euros;

// Array con los distintos tipos de cambio
const divisas = [cambio1, cambio2, cambio3, cambio4];

// Main del simulador
fecha.innerText = new Date().toLocaleDateString();





