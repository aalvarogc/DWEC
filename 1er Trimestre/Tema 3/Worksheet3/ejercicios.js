// EJERCICIO 1
// Find largest number
// let a = [1,4,5,2,1,56,234,1,12,8,0]
// let b = a.sort((a,b) => a-b)
// let result = b.pop()
// document.write(result)

// Find longest string
// let a = ["aa", "aaa", "a","aaaaa","a"]
// let b = a.sort()
// let result = b.pop()
// document.write(result)

// Find even numbers
// let a = [1,2,4,5,432,6,75,3,2,35,236]
// let b = a.filter(n => n%2 == 0)
// document.write(b)

// Find odd numbers
// let a = [1,2,4,5,432,6,75,3,2,35,236]
// let b = a.filter(n => n%2 != 0)
// document.write(b)

// Find words that contain "is"
// let a = ["pisa", "perro", "coche", "misa"]
// let b = a.filter(n => n.includes("is"))
// document.write(b)

// Assert all numbers are divisible by three
// let a = [1,3,4,6,45,34,30]
// let b = a.filter((n) => n%3 == 0)
// document.write(b)

// Zip teo arrays together
// let a = [1,2,3,4,5]
// let b = [6,7,8,9,10]
// let c = [...a, ...b]
// document.write(c)


// EJERCICIO 2
// let names = ["Javier", "Manuel", "Álvaro", "José", "Mónica", "Jaime"]
// let Jnames = names.filter((a) => a.toUpperCase().startsWith("J"))
// document.write(Jnames)


// EJERCICIO 3
// document.write("--------------------------<br>| 34 | 21 | 32 | 41 | 25  |<br>--------------------------|<br>| 14 | 42 | 43 | 14 | 31  |<br>--------------------------|<br>| 54 | 45 | 52 | 42 | 23  |<br>--------------------------|<br>| 33 | 15 | 51 | 31 | 35  |<br>--------------------------|<br>| 21 | 52 | 33 | 13 | 23  |<br>--------------------------<br><br>")

// let treasureMap = [
//     [34,21,32,41,25],
//     [14,42,43,14,31],
//     [54,45,52,42,23],
//     [33,15,51,31,35],
//     [21,52,33,13,23]
// ]

// function treasureHunt(map){
//     currentPosition = 11;
//     x = parseInt(currentPosition / 10) - 1;
//     y = parseInt(currentPosition % 10) - 1;

//     while(map[x][y] != currentPosition){
//         nextPosition = map[x][y];
//         currentPosition = nextPosition;
//         document.write(nextPosition, "<br>");
//         x = parseInt(currentPosition / 10) - 1;
//         y = parseInt(currentPosition % 10) - 1;
//     }
// }

// treasureHunt(treasureMap)


// EJERCICIO 6
function squareCode(text) {
    noSpaces = text.replace(/ /g,'');
    width = Math.sqrt(noSpaces.length);
    textList = noSpaces.split("");
    lista = [];
    for(let i=0; i <= textList.length; i++){
        
    }
    console.log(lista)
}

squareCode("hola buenas tarde")