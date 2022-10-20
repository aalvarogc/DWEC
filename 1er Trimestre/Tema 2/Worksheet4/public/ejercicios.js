// Ejercicio 1
let infoNavigator = navigator;
document.write("<table border=1>")
for(let elemento in infoNavigator){
    document.write("<tr><td>"+elemento+"</td><td>"+infoNavigator[elemento]+"</td></tr>")
}
document.write("</table><br><br>")


// Ejercicio 2
let infoScreen = screen;
document.write("<table border=1>")
for(let elemento in infoScreen){
    document.write("<tr><td>"+elemento+"</td><td>"+infoScreen[elemento]+"</td></tr>")
}
document.write("</table>")