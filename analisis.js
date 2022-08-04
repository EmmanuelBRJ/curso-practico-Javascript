// Creamos un nuevo array solo con los salarios de los trabajadores
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

// Ordenamos en orden ascendente los salarios del array salariosCol
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

/* Puesto que para calcular la mediana debemos antes determinar si la cantidad de elementos 
del arreglo es par o impar utilizamos la siguiente funcion*/

function esPar(numerito){
    return (numerito % 2 === 0);
};

// función para calcular la media aritmetica

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (acumulado, valor){
            return acumulado + valor;
        }, 0);
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// calculamos la mediana de salarios

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if (esPar(lista.length)){
        const personitaMidad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personitaMidad1, personitaMitad2);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

console.log(
    medianaSalarios(salariosColSorted)
);