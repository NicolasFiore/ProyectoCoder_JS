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
const cambio1 = new Cambio("dolar a peso", 98.91);
const cambio2 = new Cambio("euro a peso", 114.28 ); 
const cambio3 = new Cambio("dolar a euro", 0.87);
const cambio4 = new Cambio("euro a dolar", 1.17);

// Variables
let pesos;
let dolares;
let euros;
let inputPesos = document.getElementById("pesos");
let inputDolares = document.getElementById("dolares"); 
let inputEuros = document.getElementById("euros");

// Array con los distintos tipos de cambio
const divisas = [cambio1, cambio2, cambio3, cambio4];

// Main del simulador
fecha.innerText = new Date().toLocaleDateString();

inputPesos.addEventListener("click", mostrarPesosADivisas);
function mostrarPesosADivisas(){
    pesos = parseFloat(prompt("Ingrese cúantos pesos quiere convertir."));
    document.getElementById("pesos").value = pesos.toFixed(2);
    document.getElementById("dolares").value = convertirPesoDolar(pesos).toFixed(2);
    document.getElementById("euros").value = convertirPesoEuro(pesos).toFixed(2);
}

inputDolares.addEventListener("click", mostrarDolaresADivisas);
function mostrarDolaresADivisas (){
    dolares = parseFloat(prompt("Ingrese cúantos dólares quiere convertir."));
    document.getElementById("pesos").value = convertirDolarPeso(dolares).toFixed(2);
    document.getElementById("dolares").value = dolares.toFixed(2);
    document.getElementById("euros").value = convertirDolarEuro(dolares).toFixed(2);
}

inputEuros.addEventListener("click", mostrarEurosADivisas);
function mostrarEurosADivisas (){
    euros = parseFloat(prompt("Ingrese cúantos euros quiere convertir."));
    document.getElementById("pesos").value = convertirEuroPeso(euros).toFixed(2);
    document.getElementById("dolares").value = convertirEuroDolar(euros).toFixed(2);
    document.getElementById("euros").value = euros.toFixed(2);
}
