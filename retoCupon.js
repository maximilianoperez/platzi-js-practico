// RETO 
//Funcion para calcular descuento
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

//Funcion para calcular descuento con cupon 

function calcularDescuentoConCupon(){
    //Capturar valor precioInicial
    const precioInicial = document.getElementById("precioInicial");
    const precioValue = precioInicial.value;
    console.log(precioValue);

    //Capturar valor de cupon 
    const cupon = document.getElementById("cupon");
    const cuponValue = cupon.value;
    console.log(cuponValue);

    //Validar cupon 
    if (cuponValue === "SC30") {
        let descuento = 30; 
        
        const precioFinal = calcularPrecioConDescuento(precioValue, descuento);

        console.log(precioFinal);
        //En esta parte escribimos un parrafo desde js en html

        const resultP = document.getElementById("imprimir");

        resultP.innerText = "Cupon válido por 30% de descuento total a pagar $" + precioFinal;

    }else {
        console.log("Cupon Invalido. Total a pagar $ "+ precioValue);
        //En esta parte escribimos un parrafo desde js en html

        const resultP = document.getElementById("imprimir");

        resultP.innerText = "El cupon es invalido total a pagar $" + precioValue;
    }

}
