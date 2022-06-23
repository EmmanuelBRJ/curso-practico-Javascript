
function calcularMediaAritmetica(lista){
   
    /* 
    
    ciclo for para realizar la suma de todos los elementos 
    de la lista 

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    } 
    
    realizar la suma de todos los elementos de la lista mediante
    el método .reduce() utilizando una función anonima.

    array.prototype.reduce(): este método ejecuta una función reductora
    sobre cada elemento de un array, devolviendo como resultado un único valor.
    */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista;
}