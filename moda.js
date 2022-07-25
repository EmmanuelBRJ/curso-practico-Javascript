function calcularModa() {
    // Se traen los datos del Html y los guardamos los valores en una variable
    const entradaModa = document.getElementById("dataModa");
    const modaValue = entradaModa.value;

    // convertimos los valores en un array de numeros puesto que son de tipo string 
    let arrayModa = Array.from(modaValue.split(","), Number);

    // inicializamos el objeto en el cual organizaremos los elementos del array y en donde contaremos cuantas veces se repite
    const listaCount = {};

    arrayModa.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]; 
        }
    );

    const moda = listaArray[listaArray.length -1];

    const mostrarResultado = document.getElementById("resultadoModa");
    mostrarResultado.innerText = `La moda es: ${moda[0]} que se repite un total de: ${moda[1]} veces`;
}