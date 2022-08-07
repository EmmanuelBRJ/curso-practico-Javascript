/* Puesto que para calcular la mediana debemos antes determinar si la cantidad de elementos 
del arreglo es par o impar utilizamos la siguiente funcion, funciones Helpers*/ 

function esPar(numerito){
    return (numerito % 2 === 0);
};

// función para calcular la media aritmetica

function calcularMediaAritmetica(){
    const lista = [...arguments];
    const sumaLista = lista.reduce(
        (acumulado = 0, valor) => acumulado + valor);
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// calculamos la mediana de salarios
// Calculadora de medianas
function medianaSalarios(salario){
    const mitad = parseInt(salario.length /2);
    if (esPar(salario.length)){
        const personitaMitad1 = salario[mitad - 1];
        const personitaMitad2 = salario[mitad];

        const mediana = calcularMediaAritmetica(personitaMitad1, personitaMitad2);
        return mediana;
    } else {
        const personitaMitad = salario[mitad];
        return personitaMitad;
    }
};

// Creamos un nuevo array solo con los salarios de los trabajadores
// Mediana general
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

// 
const medianaGeneralCol = medianaSalarios(salariosColSorted);


// mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});