// Ejercicio 1
// let num1 = Math.floor(Math.random() * 2);
// document.write(num1, "<br>");

// let num2 = Math.floor(Math.random() * (200 - 100) + 100);
// document.write(num2, "<br>");

// let numero1 = parseInt(prompt("Introduce un número:"));
// let numero2 = parseInt(prompt("Introduce otro número:"));
// let resultado = Math.floor(Math.random() * (numero2 - numero1) + numero1)
// document.write(resultado, "<br>");


// Ejercicio 5
// let a = parseInt(prompt("Introduce el coeficiente a:"));
// let b = parseInt(prompt("Introduce el coeficiente b:"));
// let c = parseInt(prompt("Introduce el coeficiente c:"));

// function secondDegreeEc(a, b, c){
//     let resultado1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a);
//     let resultado2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a);
//     document.write("Resultado 1: ", resultado1, "<br>")
//     document.write("Resultado 2: ", resultado2)
// }
// document.write(secondDegreeEc(a, b, c))


// Ejercicio 7
// document.write("<table border='1' cellspacing='2'>");
// for(let i = 0; i <= 10; i++){
//     document.write("<tr>")
//     document.write("<td>"+i+"</td>")
//     document.write("<td>"+Math.sin(i)+"</td>")
//     document.write("</tr>")
// }
// document.write("</table>");


// Ejercicio 8
// let options = ["rock", "paper", "scissors"];
// let randomOption = Math.floor(Math.random() * 3);


// let image = document.getElementById("image");
// image.src = options[randomOption]+".svg";