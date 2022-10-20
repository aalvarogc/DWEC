// Ejercicio 1
// function suma(...numeros){
//     let resultado = 0;
//     for(let i=0; i < numeros.length; i++){
//         resultado += numeros[i];
//     }
//     return resultado;
// }
// document.write(suma(1,3,5,6,3));


// Ejercicio 2
// function addOnlyNums(...array){
//     let resultado = 0;
//     for(let i=0; i < array.length; i++){
//         if(typeof array[i] != "number"){
//             continue;
//         }
//         resultado += array[i];
//     }
//     return resultado;
// }
// document.write(addOnlyNums(1,3,"hola",5, true, undefined, 10));


// Ejercicio 3
// function countTheArgs(...numbers) {
//     let contador = 0;
//     for(let i = 0; i < numbers.length; i++){
//         contador++;
//     }
//     return contador;
// }

// document.write(countTheArgs(3,undefined,5,1,"hola",2,5,true))


// Ejercicio 4
// function combineTwoArrays(array1, array2){
//     newArray = [...array1, ...array2]
//     return newArray
// }

// array1 = Array(1,2,4);
// array2 = Array("hola",5,true);
// document.write(combineTwoArrays(array1, array2))


// Ejercicio 5
// function sumEveryOther(...numbers){
//     let resultado = 0;
//     for(let i = 0; i < numbers.length; i++){
//         if (i % 2 == 0){
//             resultado += numbers[i];
//         }
//     }
//     return resultado;
// }

// document.write(sumEveryOther(1,5,8,3,1))


// Ejercicio 6
// function onlyUniques(...array){
//     let resultado = [...new Set(array)];
//     return resultado;
// }

// document.write(onlyUniques(1,4,6,6,1,7,4))


// Ejercicio 7
// function combineAllArrays(...arrays){
//     let resultado = []
//     for(let array of arrays){
//         resultado.push(...array)
//     }
//     console.log(resultado)
//     return resultado
// }

// document.write(combineAllArrays([1,2,5,2], [8.1,3,7], ["hola",4,true]))



// Ejercicio 8
// function squareAndSum(...numbers){
//     let resultado = 0;
//     for(let i = 0; i < numbers.length; i++){
//         resultado += numbers[i]**2
//     }
//     return resultado;
// }

// document.write(squareAndSum(5,10))