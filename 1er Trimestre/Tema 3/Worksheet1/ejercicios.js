// Ejercicio 2
function dado(){
    lanzamiento = Math.ceil(Math.random() * 6)
    return lanzamiento
}
document.write("Lanzamiento: ", dado(), "<br>");

// Ejercicio 3
result = [0,0,0,0,0,0,0]
for(let i=0; i < 6000; i++){
    result[dado()]++
}
for(let i=1; i < result.length; i++){
    document.write("El número "+i+" ha salido "+result[i]+" veces<br>")
}

// Ejercicio 6
function potencia(base, exponente){
    if(exponente === 0){
        return 1
    }else if(exponente > 0){
        return base * potencia(base, exponente - 1)
    }
}
document.write("Potencia: ", potencia(3, 3), "<br>")

// Ejercicio 7
function factorial(num){
    if(num === 1){
        return 1
    }else{
        return num * factorial(num - 1)
    }
}
document.write("<table border=1>")
for(let i=1; i <= 10; i++){
    document.write("<tr><td>"+i+"!</td><td>"+factorial(i)+"</td></tr>")
}
document.write("</table>")


// Worksheet b
// Ejercicio 1
const suma = (num1, num2) => {
    return num1 + num2
}

// Ejercicio 2 y 3
const stringLength = (str) => {
    let length = str.length
    console.log(`the length of "${str}" is:`, str.length)
    return length
}

// Ejercicio 4
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
const showAlert = (nombre) => {
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${nombre}!`)
}

// Ejercicio 5
const oneTwoThreeRotate = () => {
    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
        tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
    })
}
oneTwoThreeRotate

// Ejercicio 6
const persona = (name, age) => {
    document.write("Hello, I am ", name, ", and I am ", age, " years old")
}

// Ejercicio 7
const sumArray = (numbers) => {
    this.numbers = numbers

    result = 0
    for(let i=0; i < this.numbers.length; i++){
        result += this.numbers[i]
    }
    return result
}
// document.write(sumArray([3,4,5,2]))

// Ejercicio 8
const fire = () => {
    return "bulls-";
}

// Ejercicio 9
const fibonacci = (num) => {
    if (num < 3) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2)
}