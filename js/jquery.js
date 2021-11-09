// Variables con selectores
let inputPesos = $("#pesos");
let inputDolares = $("#dolares"); 
let inputEuros = $("#euros");

// Main
// Mediante keyup tomo los datos y los imprimo por dom
$( document ).ready(function() {
inputPesos.on('keyup', mostrarPesosADivisas);
function mostrarPesosADivisas(e){
    pesos= parseFloat(e.target.value);
    $("#pesos").val(pesos);
    $("#dolares").val(convertirPesoDolar(pesos).toFixed(2));
    $("#euros").val(convertirPesoEuro(pesos).toFixed(2)); 
}

inputDolares.on("keyup", mostrarDolaresADivisas);
function mostrarDolaresADivisas (e){
    dolares = parseFloat(e.target.value);
    $("#pesos").val(convertirDolarPeso(dolares).toFixed(2));
    $("#dolares").val(dolares);
    $("#euros").val(convertirDolarEuro(dolares).toFixed(2));
}

inputEuros.on("keyup", mostrarEurosADivisas);
function mostrarEurosADivisas (e){
    euros = parseFloat(e.target.value);
    $("#pesos").val(convertirEuroPeso(euros).toFixed(2));
    $("#dolares").val(convertirEuroDolar(euros).toFixed(2));
    $("#euros").val(euros);
}
});