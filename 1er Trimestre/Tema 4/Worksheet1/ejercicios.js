// Ejercicio 1
// function alerta() {
//     alert("Se ha dado click");
// }

// document.addEventListener("click", alerta);


// Ejercicio 2
// const text = document.getElementById("cords");

// function cords(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     let coor = "Coordenadas: (" + x + ", " + y + ")";
//     text.innerHTML = coor;
// }

// document.addEventListener("mousemove", cords)


// Ejercicio 4 y 5
// function genera_tabla() {
//     var body = document.getElementsByTagName("body")[0];
//     var tabla   = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//       for (var i = 0; i <= 60; i++) {
//       var hilera = document.createElement("tr");
//       for (var j = 0; j <= 60; j++) {
//         var celda = document.createElement("td");
//         var textoCelda = document.createTextNode(' ');
//         celda.appendChild(textoCelda);
//         hilera.appendChild(celda);
//       }
//         tblBody.appendChild(hilera);
//     }
//     tabla.appendChild(tblBody);
//     body.appendChild(tabla);
//     tabla.setAttribute("cellspacing", 0)
// }

// genera_tabla()

// function paintCell(e){
//     if(e.ctrlKey){
//         e.target.style.backgroundColor = "red";
//     }else if(e.shiftKey){
//         e.target.style.backgroundColor = "blue";
//     }
// }

// function removeColor(e){
//     if(e.altKey){
//         e.target.style.backgroundColor = "white";
//     }
// }

// function cleanTable(){
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].style.backgroundColor = "white";
//     }
// }

// let cleanBtn = document.getElementById("clnBtn");
// cleanBtn.addEventListener("click", cleanTable);

// const cells = document.getElementsByTagName("td");

// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("mouseover", paintCell)
//     cells[i].addEventListener("mouseover", removeColor)
// }


// Ejercicio 9 y 10
// window.onload = () => {
//     document.onmousedown = arrastrar;
//     document.onmouseup = pararArrastre;
// };

// function arrastrar(e){
//     if(e.target){
//       objective = e.target;
//     }
//     else{
//       objective = e.srcElement;
//     }
  
//     offsetX = e.clientX;
//     offsetY = e.clientY;
  
//     if(!objective.style.left){
//       objective.style.left = "0px";
//     }
    
//     if(!objective.style.top){
//       objective.style.top = "0px";
//     }
  
//     Xcord = parseInt(objective.style.left);
//     Ycord = parseInt(objective.style.top);
//     arrastre = true;
  
//     document.onmousemove = arrastrarImg;
//     return false;
// }

// function pararArrastre(){
//     arrastre = false;
// }
  
// function arrastrarImg(e){
//     if(!arrastre){
//         return false;
//     }
//     objective.style.left = Xcord + e.clientX - offsetX + "px";
//     objective.style.top = Ycord + e.clientY - offsetY + "px";
//     return false;
// }