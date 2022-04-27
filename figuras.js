//Codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden "+ ladoCuadrado+ " cm");

function perimetroCuadrado(lado){
    return lado *4;
}

perimetroCuadrado();

//console.log("El perimetro del cuadrado es "+ perimetroCuadrado+ " cm");

function areaCuadrado(lado){
    return lado * lado;
}  

areaCuadrado();

//console.log("El area del cuadrado es "+ areaCuadrado+ " cm^2");

console.groupEnd();




//Codigo del triangulo 
console.group("Triangulo")

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log("Los lados del triangulo miden "+ ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, "+ baseTriangulo + "cm.");

//const alturaTriangulo = 5.5;

//console.log("La altura del triangulo es "+ alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

perimetroTriangulo();

//console.log("El perimetro del triangulo es " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

areaTriangulo();

//console.log("El area del triangulo es " + areaTriangulo + " cm^2");

console.groupEnd();


//Codigo Circulo 
console.group("Circulo");

//Radio
//const radioCirculo = 4;

//console.log("El radio del circulo es " + radioCirculo + " cm");

//Diametro
function diametroCirculo(radio){
    return radio *2;
};

//console.log("El diametro del circulo es " + diametroCirculo + " cm");

//PI
const PI = Math.PI;

//console.log("El valor de PI es " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

perimetroCirculo();

//console.log("El perimetro del circulo es " + perimetroCirculo + " cm");

//Area
function areaCirulo(radio){
    return (radio * radio) * PI;
};

//console.log("El area del circulo es " + areaCirulo + " cm^2");


console.groupEnd();


//Aqui interactuamos con el HTML 

function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};


//RETO 

function calcularAltura(lado1,lado2,base){
    let ladoA = document.getElementById("lado1");
    let ladoB = document.getElementById("lado2");
    let baseB = document.getElementById("base");

    let value1 = ladoA.value;
    let value2 = ladoB.value;
    let valueB = baseB.value;

    if(value1 === value2){
        
        let alturaT = Math.sqrt(value1**2 - valueB**2 / 4);

        console.log(alturaT);
    }
    
}