// Ejercicio 1
// let fecha = new Date();
// document.write(fecha.getFullYear(), "<br>");
// document.write(fecha.getMonth(), "<br>");
// document.write(fecha.getDate(), "<br>");
// document.write(fecha.getHours(), "<br>");
// document.write(fecha.getMinutes(), "<br>");
// document.write(fecha.getSeconds());

// Ejercicio 2
// let fechaHoy = new Date();
// let fecha85 = new Date();
// fecha85.setDate(fechaHoy.getDate() + 85)
// let fecha187 = new Date();
// fecha187.setDate(fechaHoy.getDate() - 187)
// fecha85.setFullYear(fecha85.getFullYear() + 2);
// fecha187.setHours(fecha187.getHours() - 24);
// let fechaResto = fecha85 - fecha187;

// Ejercicio 3
// let segundos = 60;

// function contador(){
//     document.write(segundos, "<br>")
//     if(segundos == 0){
//         document.write("Final")
//     }else{
//         segundos -= 1;
//         setTimeout(contador, 1000)
//     }
// }
// contador()

// Ejercicio 5
// function relojCont(){
//     let reloj = new Date();
//     let hora = reloj.getHours();
//     let minutos = reloj.getMinutes();
//     let segundos = reloj.getSeconds();

//     if(hora > 24){
//         hora -= 24;
//     }

//     // if(hora < 10){
//     //     hora = "0" + hora
//     // }else{
//     //     hora = hora;
//     // }
//     hora = (hora < 10) ? "0" + hora : hora;
//     minutos = (minutos < 10) ? "0" + minutos : minutos;
//     segundos = (segundos < 10) ? "0" + segundos : segundos;

//     var tiempo = hora + ":" + minutos + ":" + segundos; 

//     document.getElementById("reloj").innerText = tiempo;

//     setTimeout(relojCont, 1000)
// }
// relojCont();