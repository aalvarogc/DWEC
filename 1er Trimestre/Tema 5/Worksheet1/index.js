window.onload = ()=>{
    let lista = document.getElementById("lista");
    let btnAñadir = document.getElementById("añadirElemento");
    btnAñadir.addEventListener("click", ()=>{
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = "Elemento";
        lista.appendChild(nuevoElemento);
    })

    let anterior = document.getElementById("anterior");
    let siguiente = document.getElementById("siguiente");

    let imagenes = document.getElementsByTagName("img");
    anterior.addEventListener("click", ()=>{
        imagenes.forEach(imagen => {
            let zIndex = imagen.style.zIndex;
            imagen.style.zIndex = zIndex++;
        });
    })
}