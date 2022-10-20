// CONDICIONALES o IF
// Ejercicio 1
// let num = prompt("Introduce un valor: ");

// if (num % 2 == 0){
//     console.log(`El número ${num} es par`)
// }else{
//     console.log(`El número ${num} es impar`)
// }

// Ejercicio 2
// let edad = prompt("Introduce tu edad: ");

// if (edad >= 18){
//     console.log("Eres mayor de edad")
// }else{
//     console.log("Eres menor de edad")
// }

// Ejercicio 3
// let edad = prompt("Introduce tu edad: ");
// let localidad = prompt("Introduce tu localidad de nacimiento: ")

// if (edad > 25 && localidad == "Madrid"){
//     console.log("Enhorabuena")
// }

// Ejercicio 4
// let num = prompt("Introduce un valor: ");

// if (num > 100){
//     let descuento = num * 0.85;
//     document.write(descuento);
// }

// Ejercicio 6
// let localidad = prompt("¿Donde vives?")
// let edad = prompt("Introduce tu edad: ")

// if (localidad == "Madrid" && edad >= 18 && edad <= 30){
//     document.write("Puedes acceder al carnet de empresarios emprendedores.")
// }else{
//     document.write("NO puedes acceder al carnet de empresarios emprendedores.")
// }


// IF/ELSE
// Ejercicio 3 
// let edad = prompt("Introduce tu edad: ");

// if (edad <= 5){
//     document.write("Debes estar en el jardín de infancia");
// } else if(edad >= 6 && edad <= 11){
//     document.write("Debes estar en primaria");
// } else if(edad >= 12 && edad <= 16){
//     document.write("Debes estar en la ESO");
// } else if(edad >= 17 && edad <= 21){
//     document.write("Debes estar en Bachiller o Ciclos");
// } else if(edad > 21){
//     document.write("Debes estar en la Universidad");
// }

// Ejercicio 5
// let examen1 = parseFloat(prompt("Nota del primer examen: "));
// let examen2 = parseFloat(prompt("Nota del segundo examen: "));
// let trabajo1 = parseFloat(prompt("Nota del primer trabajo: "));
// let trabajo2 = parseFloat(prompt("Nota del segundo trabajo: "));

// let media_examenes = (examen1 + examen2) / 2;
// let media_trabajos = (trabajo1 + trabajo2) / 2;
// if (examen1 <= 4.5 || examen2 <= 4.5 || trabajo1 <= 4.5 || trabajo2 <= 4.5){
//     document.write("Estás suspenso");
// }else if (((media_examenes * 0.75) + (media_trabajos * 0.25)) > 5){
//     document.write("Has aprobado");
// }else{
//     document.write("No has aprobado");
// }


// SWITCH
// Ejercicio 1
// let mes = prompt("Introduce un mes:");

// switch(mes){
//     case ("Enero"):
//     case ("Marzo"):
//     case ("Mayo"):    
//     case ("Julio"):
//     case ("Agosto"):
//     case ("Octubre"):
//     case ("Diciembre"):
//         document.write(`El mes ${mes} tiene 31 días`);
//         break;
//     case "Febrero":
//         document.write("Tiene 28 días");
//         break;
//     case ("Abril"):
//     case ("Junio"):
//     case ("Septiembre"):
//     case ("Noviembre"):
//         document.write("Tiene 31 días");
//         break;
// }