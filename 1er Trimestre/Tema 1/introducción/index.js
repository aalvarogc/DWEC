document.write("<h1>Contenido de mi primera web</h1>");

let miVariable;
console.log("El valor de mi variable es", miVariable);

miVariable = 43;
console.log("El valor de mi variable es " + miVariable);
console.log(`El valor de mi variable es ${miVariable}`);

let booleano = true;

// CONDICIONAL IF
if (booleano){
    console.log("La variable booleano es true.")
}else{
    console.log("La variable booleano es false.")
}

let a = 3;
let b = 5;

if (a=="3" && b===5){
    console.log("La condición es true")
} else{
    console.log("La condición es false")
}

// SWITCH
switch(a){
    case 3:
        console.log("a vale 3");
        break;
    case 5:
        console.log("a vale 5");
        break;
    default:
        console.log("entra en default");
}

// BUCLE FOR
document.write("<H4>BUCLES FOR</H4>")
for(let i=0, j=1; i < 10 && j < 3; i++, j++){
    document.write(i, "<br/>");
}

let nombres = ["alvaro","soof","juan","armando"];

for(let i=0; i < nombres.length; i++){
    document.write(nombres[i], "<br/>");
}

for (let i of nombres){
    document.write(i, "<br/>")
}

// BUCLE WHILE
document.write("<H4>BUCLES WHILE</H4>")
let contador = 0;

while(contador <= 10){
    document.write(contador, "<br/>");
    contador++;
}

document.write("<h5>BUCLES DO WHILE</h5>")
let cont = 11;

do{
    document.write(cont, "<br/>");
} while(cont <= 10);


// FUNCIONES
document.write("<h5>FUNCIONES</h5>")
function suma(a, b, c){
    let resultado = a + b + c;
    document.write(resultado);
}

let numeros = [1,3,5];
suma(...numeros);