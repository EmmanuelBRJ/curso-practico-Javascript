function calcularMediana (){
    // crear e inicializar la variable valores y destructurar el objeto arguments para poder manipularlo 
    const valores = [...arguments];
    valores.sort((a, b) => a - b); // ordenar los datos mediante el método sort de menor a mayor 

    const mitadLista = parseInt(valores.length / 2);

    let mediana;

    if (valores.length % 2 === 0){
        const elemento1 = valores[mitadLista - 1];
        const elemento2 = valores[mitadLista];
        const promedioElementos = (elemento1 + elemento2) / 2;

        mediana = promedioElementos;

    } else {
        mediana = valores[mitadLista];
    }

    return mediana;
    
}


console.log(calcularMediana(10, 25, 50, 100, 5, 8));
console.log(calcularMediana(10, 25, 100, 5, 8));