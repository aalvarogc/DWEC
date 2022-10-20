// Ejercicio 1
// function invierteCadena(cadena){
//     let separarCadena = cadena.split("")
//     let invertirCadena = separarCadena.reverse()
//     let resultado = invertirCadena.join("")
//     return resultado
// }
// document.write(invierteCadena("hola"))

// function inviertePalabras(cadena){
//     let separarCadena = cadena.split(" ")
//     for(let i in separarCadena){
//         separarCadena[i] = invierteCadena(separarCadena[i])
//     }
//     return separarCadena.join(" ")
// }
// document.write(inviertePalabras("hola como estas"))

// function encuentraPalabraMasLarga(cadena){
//     let resultado = cadena.split(" ")
//     let palabraLarga = ""
//     for(let palabra of resultado){
//         if(palabra.length > palabraLarga.length){
//             palabraLarga = palabra
//         }
//     }
//     return palabraLarga
// }
// document.write(encuentraPalabraMasLarga("hola como estas"))

// function filtraPalabrasMasLargas(cadena, i){
//     let contador = 0;
//     let separarCadena = cadena.split(" ")
//     for(let palabra of separarCadena){
//         if(palabra.length > i){
//             contador++
//         }
//     }
//     return contador
// }
// document.write(filtraPalabrasMasLargas("hola como estas buenisima person", 5))

// function cadenaBienFormada(cadena){
//     let resultado = cadena.toLowerCase()
//     let letra = resultado.charAt(0).toUpperCase()
//     resultado = letra + resultado.substr(1)
//     return resultado
// }
// document.write(cadenaBienFormada("hoLa cOmo EstaS"))


// Ejercicio 2
// function UpperLower(cadena){
//     let cadenaMinuscula = cadena.toLowerCase()
//     let cadenaMayuscula = cadena.toUpperCase()
//     if(cadenaMinuscula === cadena){
//         document.write("Está escrito en minúscula")
//     }else if(cadenaMayuscula === cadena){
//         document.write("Está escrito en mayúscula")
//     }else{
//         document.write("Está escrito en mayúscula y minúscula")
//     }
// }
// UpperLower("HOLA COMO ESTAS")


// Ejercicio 3
// function locationSubcadena(cadena, subcadena){
//     let posiciones = []
//     let cadenaSeparada = cadena.split("")
//     for(let palabra in cadenaSeparada){
//         if(cadenaSeparada[palabra] === subcadena){
//             posiciones.push(palabra)
//         }
//     }
//     return posiciones
// }
// document.write(locationSubcadena("hola como estas", "a"))


// Ejercicio 4
// function sortConstonantes(cadena){
//     let cadenaSeparada = cadena.split("")
//     let vocales = ""
//     let consonantes = ""
//     let resultado = ""
//     for(let palabra of cadenaSeparada){
//         for(let letra of palabra){
//             if(letra == "a" ||letra == "e" ||letra == "i" ||letra == "o" ||letra == "u" ||letra == "A" ||letra == "E" ||letra == "I" ||letra == "O" ||letra == "U"){
//                 vocales += letra
//             }else{
//                 consonantes += letra
//             }
//         }
//     }
//     resultado = consonantes + vocales
//     return resultado
// }
// document.write(sortConstonantes("personalidad"))


// Ejercicio 5
// function deleteRepeated(cadena){
//     cadena = cadena.replace(/ /g, "");
//     let cadenaSeparada = cadena.split("");
//     let resultado = [...new Set(cadenaSeparada)];
//     resultado = resultado.join("");
//     return resultado;
// }
// document.write(deleteRepeated("sorpresa"))


// Ejercicio 6
// function subcadena(cadena, subcadena){
//     let index = cadena.toLowerCase().indexOf(subcadena.toLowerCase())
//     if(index != -1){
//         document.write("La subcadena"+subcadena+" está dentro de "+cadena)
//     }else{
//         document.write("La subcadena '"+subcadena+"' no está dentro de '"+cadena+"'")
//     }
// }
// subcadena("hola como estas", "como")


// Ejercicio 7
// function palindromo(cadena){
//     let reversaCadena = cadena.split("").reverse().join("")
//     if(cadena === reversaCadena){
//         document.write("Es un palíndromo")
//     }else{
//         document.write("No es un palíndromo")
//     }
// }
// palindromo("palolap")


// Ejercicio 8
// function contPalabras(cadena){
//     let resultado = []
//     let cadenaSeparada = cadena.split(" ")
//     for(let elemento of cadenaSeparada){
//         if(elemento != ""){
//             resultado.push(elemento)
//         }
//     }
//     let numPalabras = resultado.length
//     return numPalabras
// }

// document.write(contPalabras("hola   buenas  tardes  "))


// Ejercicio 9
// function tablaCadena(cadena){
//     let cadenaReversa = cadena.split("").reverse().join("")
//     let resto = cadena.substr(1,cadena.length-2)
//     let restoReverso = resto.split("").reverse().join("")

//     document.write("<table>")
//     document.write("<tr>")
//     for(let i=0; i < cadena.length; i++){
//         document.write("<td>"+cadena[i]+"</td>")
//     }
//     document.write("</tr>")

//     for(let i=0; i < resto.length; i++){
//         document.write("<tr><td>"+resto[i]+"</td>")
//         for(let j=0; j < resto.length; j++){
//             document.write("<td></td>")
//         }
//         document.write("<td>"+restoReverso[i]+"</td></tr>")
//     }

//     document.write("<tr>")
//     for(let i=0; i < cadenaReversa.length; i++){
//         document.write("<td>"+cadenaReversa[i]+"</td>")
//     }
//     document.write("</tr>")
//     document.write("</table>")
// }
// tablaCadena("PACOPORRO")