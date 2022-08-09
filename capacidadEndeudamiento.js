// funcion para calcular la capacidad de endeudamiento 
function calcularCapacidadEndeudamiento(){

    // recolectar los datos ingresados por el usuario
    const ingreso = document.getElementById("ingresos");
    const ingresosValue = parseInt(ingreso.value);
    const egreso = document.getElementById("egresos");
    const egresosValue = parseInt(egreso.value);

    // con los datos obtenidos realizamos el calculo de la capacidad de endeudamiento 
    const capacidadDeuda = (ingresosValue - egresosValue) * 0.40

    const resultado = document.getElementById("resultado");
    resultado.innerText = `Tú capacidad de endeudamiento maximo es de Q: ${capacidadDeuda}`;
};
