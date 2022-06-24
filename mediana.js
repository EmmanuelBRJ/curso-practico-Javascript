function calcularMediana(lista){
    
    function calcularNumeroMediano(lista){
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );

        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numerito){
        if (numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularNumeroMediano([elemento1, elemento2]);

        let mediana = promedioElemento1y2;
        return mediana;

    } else {
        let mediana = lista[mitadLista];
        return mediana;
    }
}

console.log(calcularMediana(100, 200, 300, 400));
