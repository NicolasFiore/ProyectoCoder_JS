// Inicializo los selectores
let inputPesos = $("#pesos");
let inputDolares = $("#dolares"); 
let inputEuros = $("#euros");



// Main
// Mediante keyup tomo los datos y los imprimo por dom
// Mediante css modifico el color de los divisas convertidas
$( document ).ready(function() {
inputPesos.on('keyup', mostrarPesosADivisas);
function mostrarPesosADivisas(e){
    pesos = parseFloat(e.target.value);
    $("#pesos").val(pesos);
    $("#dolares").val(convertirPesoDolar(pesos).toFixed(2));
    $("#euros").val(convertirPesoEuro(pesos).toFixed(2));
    if(pesos >= 0){
        $("#pesos").css({ "color": "black"});
        $("#dolares").css({ "color": "red"});
        $("#euros").css({ "color": "red"});
    }
}

inputDolares.on("keyup", mostrarDolaresADivisas);
function mostrarDolaresADivisas (e){
    dolares = parseFloat(e.target.value);
    $("#pesos").val(convertirDolarPeso(dolares).toFixed(2));
    $("#dolares").val(dolares);
    $("#euros").val(convertirDolarEuro(dolares).toFixed(2));
    if(dolares >= 0){
        $("#pesos").css({ "color": "red"});
        $("#dolares").css({ "color": "black"});
        $("#euros").css({ "color": "red"});
    }
}

inputEuros.on("keyup", mostrarEurosADivisas);
function mostrarEurosADivisas (e){
    euros = parseFloat(e.target.value);
    $("#pesos").val(convertirEuroPeso(euros).toFixed(2));
    $("#dolares").val(convertirEuroDolar(euros).toFixed(2));
    $("#euros").val(euros);
    if(euros >= 0){
        $("#pesos").css({ "color": "red"});
        $("#dolares").css({ "color": "red"});
        $("#euros").css({ "color": "black"});
    }
}
});