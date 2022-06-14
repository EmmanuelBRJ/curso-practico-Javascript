/* const precioOriginal = 120;
const descuento = 18; */

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrecio = document.getElementById("inputPrice");
    const precio = parseFloat(inputPrecio.value);

    const inputdescuento = document.getElementById("inputDiscount");
    const descuento = parseFloat(inputdescuento.value);

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    
    const resultP = document.getElementById("resultP");
    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}