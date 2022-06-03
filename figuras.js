// Código del cuadrado}
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);*/

function perimetroCuadrado(lado){
    return lado * 4;
}


/* const areaCuadro = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadro}cm2`); */

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// Código del triángulos 
/* console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del Triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm2`); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

// Código del circulo 
console.group("Circulos");

/* // Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

// circunferencia
const diametroCirculo  = radioCirculo *2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

// PI
const PI = Math.PI; 
console.log(`PI es: ${PI}`);


const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del circulo es: ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del círculo es: ${areaCirculo}cm2`); */

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
                
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}