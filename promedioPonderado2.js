/* Definir el conjunto de números junto al peso de cada elemento 
Para esto vamos a crear un array de objetos llamado notes. Cada objeto tendrá tres valores:
course con el nombre de la materia, note con la nota de la materia y credit con los créditos
de la materia.*/

const notes = [
    {
        course: "Educación física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    }
];

/*Multiplicar cada número de la lista por su peso
Vamos a usar de nuevo el método map de los arrays.
Creamos un nuevo arreglo de solo números a partir de
multiplicar cada nota con sus créditos.*/

const notesWithCredit = notes.map(function (notesObject){
    return notesObject.note * notesObject.credit;
});

/*Sumar todos los elementos del arreglo de elementos multiplicados por su peso
Vamos a usar el método reduce de los arrays.
Creamos una nueva variable que tenga como resultado la suma de todos lo elementos del
arreglo notesWithCredit. Recuerda que la función reduce recibe una función con dos
parametros: el valor acumulado (que para evitar errores debemos inicializar en cero) y
el nuevo elemento de los arrays.*/

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/*Sumar todos los pesos (crétitos)
Sí, otra vez may y reduce. Vamos a crear un nuevo arreglo credits únicamente con 
los créditos de cada materia y otra nueva variable sumOfCredits que recorra el 
arreglo credits y sume sus elementos.*/

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

/* Hacer la división entre ambas "sumas" */

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioPonderadoNotasConCreditos);
