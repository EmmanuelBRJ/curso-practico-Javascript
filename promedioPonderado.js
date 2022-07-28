function calcularPromedioP() {
    // recopilar datos de los inputs
    const nota1 = document.getElementById("nota1");
    const nota1Value = nota1.value;
    const ponderacion1 = document.getElementById("ponderacion1");
    const ponderacion1Value = parseInt(ponderacion1.value);
    const nota2 = document.getElementById("nota2");
    const nota2Value = nota2.value;
    const ponderacion2 = document.getElementById("ponderacion2");
    const ponderacion2Value = parseInt(ponderacion2.value);
    const nota3 = document.getElementById("nota3");
    const nota3Value = nota3.value;
    const ponderacion3 = document.getElementById("ponderacion3");
    const ponderacion3Value = parseInt(ponderacion3.value);
    const nota4 = document.getElementById("nota4");
    const nota4Value = nota4.value;
    const ponderacion4 = document.getElementById("ponderacion4");
    const ponderacion4Value = parseInt(ponderacion4.value);

    const sumaValoresPonderados = (nota1Value*ponderacion1Value) + (nota2Value*ponderacion2Value) + (nota3Value*ponderacion3Value) + (nota4Value*ponderacion4Value);
    const sumaPonderaciones = ponderacion1Value + ponderacion2Value + ponderacion3Value + ponderacion4Value;
    const promedioPonderado = sumaValoresPonderados / sumaPonderaciones;
    console.log(sumaValoresPonderados, sumaPonderaciones)
    const mostrarResultado = document.getElementById("resultadoPromedioPonderado");
    mostrarResultado.innerText = `El promedio ponderado de las notas es ${promedioPonderado}`;
    console.log(promedioPonderado);
};