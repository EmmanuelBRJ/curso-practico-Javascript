function calcularMediana(){
    // crear e inicializar la variable valores y destructurar el objeto arguments para poder manipularlo 
    /* const valores = [...arguments];
    valores.sort((a, b) => a - b); // ordenar los datos mediante el método sort de menor a mayor  */

    // se captura los datos del html y se guardan los valores dentro de una variable

    const entradaMediana = document.getElementById("dataMediana");
    const medianaValue = entradaMediana.value;

    // Al ser un string los valores capturados, se procede a convertir el formato a Number

    let arrayMediana = Array.from(medianaValue.split(","), Number);

    // Ordenamos los valores de la lista desordenada mediante el método sort() de menor a mayor

    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);


    // Hallamos la mitad de la cantidad de elementos de la lista y lo redondeamos con la funcion parseInt()

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (listaOrdenada.length % 2 === 0){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElementos = (elemento1 + elemento2) / 2;

        mediana = promedioElementos;

    } else {
        mediana = listaOrdenada[mitadLista];
    }

    // Enviamos los resultados obtenidos a la página html para su visualización 
    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = `La mediana es de: ${mediana}`;
}