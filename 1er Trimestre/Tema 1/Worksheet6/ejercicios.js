// Ejercicio 4.10
// for(let i=1; i < 7; i++){
//     document.write("<h"+i+">Cabecera h"+i);
// }


// Ejercicio 4.11
// let columnas = parseInt(prompt("Columnas: "));
// let altura = prompt("Altura: ");
// let anchura = prompt("Anchura: ");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
// document.write('<tr bgcolor="white" height="'+altura+'">');
// for(let i=0; i < columnas; i++){
//     document.write('<td width="'+anchura+'">&nbsp;</td>')
// }
// document.write("</tr>");
// document.write("</table>");


// Ejercicio 4.12
// let columnas = parseInt(prompt("Columnas: "));
// let altura = prompt("Altura: ");
// let anchura = prompt("Anchura: ");

// document.write('<table border="0" cellspacing="2" bgcolor="black">');
// document.write('<tr bgcolor="white" height="'+altura+'">');
// for(let i=1; i <= columnas; i++){
//     if (i % 2 == 0){
//         document.write('<td width="'+anchura+'">&nbsp;</td>')
//     } else{
//         document.write('<td width="'+anchura+'" bgcolor="black">&nbsp;</td>')
//     }
// }
// document.write("</tr>");
// document.write("</table>");


// Ejercicio 4.13
// let columnas = parseInt(prompt("Columnas: "));
// let altura = prompt("Altura: ");
// let anchura = prompt("Anchura: ");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
// document.write('<tr bgcolor="white" height="'+altura+'">');
// let i = 0;
// while (i < columnas){
//     document.write('<td width="'+anchura+'">&nbsp;</td>');
//     i++;
// }
// document.write("</tr>");
// document.write("</table>");


// Ejercicio 4.14
// let columnas = parseInt(prompt("Columnas: "));
// let altura = prompt("Altura: ");
// let anchura = prompt("Anchura: ");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
// document.write('<tr bgcolor="white" height="'+altura+'">');
// let i = 1;
// while(i <= columnas){
//     if (i % 2 == 0){
//         document.write('<td width="'+anchura+'">&nbsp;</td>')
//     } else{
//         document.write('<td width="'+anchura+'" bgcolor="black">&nbsp;</td>')
//     }
//     i++;
// }
// document.write("</tr>");
// document.write("</table>");


// Ejercicio 4.15
// let num1 = parseInt(prompt("Introduce un número:"));
// let num2 = undefined;

// while(num1 != num2){
//     num2 = parseInt(prompt("Introduce un número:"));
//     if(num1 < num2){
//         alert("El número es más pequeño");
//     } else if(num1 > num2){
//         alert("El número es más grande");
//     } else{
//         alert("Has acertado!");
//     }
// }


// Ejercicio 4.16
// let num1 = parseInt(prompt("Introduce un número:"));
// let num2 = undefined;

// do{
//     num2 = parseInt(prompt("Introduce un número:"));
//     if(num1 < num2){
//         alert("El número es más pequeño");
//     } else if(num1 > num2){
//         alert("El número es más grande");
//     } else{
//         alert("Has acertado!");
//     }
// }while(num1 != num2)


// Ejercicio 4.17
// for(let i = 1; i < 11; i++){
//     document.write("<h3>Tabla del " + i + "</h3>")
//     for(j = 1; j < 11; j++){
//         document.write(i + " x " + j + " = " + i*j + "<br/>");
//     }
// }


// Ejercicio 4.18
// let filas = prompt("Filas:");
// let columnas = prompt("Columnas:");
// let altura = prompt("Altura:");
// let anchura = prompt("Anchura:");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
// for(let i = 0; i < filas; i++){
//     document.write('<tr bgcolor="white" height="'+altura+'">')
//     for(let j = 0; j < columnas; j++){
//         document.write('<td width="'+anchura+'">&nbsp;</td>')
//     }
//     document.write("<tr/>")
// }
// document.write("<table/>")


// Ejercicio 4.19
// let ancho_alto = prompt("Introduce el ancho/alto:");
// const size = 8;

// document.write('<table border="0" cellspacing="2" bgcolor="black">');
// for(let i = 0; i < size; i++){
//     document.write('<tr bgcolor="white" height="'+ancho_alto+'">')
//     for(let j = 0; j < size; j++){
//         if (((i + j) % 2 == 0)){
//             document.write('<td width="'+ancho_alto+'" bgcolor="black">&nbsp;</td>')
//         }else{
//             document.write('<td width="'+ancho_alto+'">&nbsp;</td>')
//             }
//         }
// }
//     document.write("<tr/>")
// document.write("<table/>")