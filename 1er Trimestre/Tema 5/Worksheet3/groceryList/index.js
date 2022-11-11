function addProduct(){
    let productName = document.getElementById("productName");

    let lista = document.getElementById("grocery--list");
    let elementoLista = document.createElement("div");
    elementoLista.className = "elementoLista";
    
    let nameText = document.createElement("span");
    nameText.className = "nameText";
    nameText.innerHTML = productName.value;

    let divImgs = document.createElement("div");
    divImgs.id = "divImgs";
    let editImg = document.createElement("img");
    editImg.src = "./editar.png";
    editImg.id = "editImg";
    
    let binImg = document.createElement("img");
    binImg.src = "./papelera.png";
    binImg.id = "binImg";

    divImgs.appendChild(editImg);
    divImgs.appendChild(binImg);

    elementoLista.appendChild(nameText);
    elementoLista.appendChild(divImgs);
    lista.appendChild(elementoLista);

    binImg.addEventListener("click",()=>{deleteElement(elementoLista)})
    editImg.addEventListener("click", ()=>{editElement(nameText)});

    
    productName.value = "";
}

function editElement(elemento){
    let newName = prompt("Introduce un nuevo nombre:");
    elemento.innerHTML = newName;
}

function deleteElement(elemento){
    elemento.remove();
}

function cleanList(list){
    if(list.hasChildNodes()){
        let children = list.childNodes;
        for(i = 1; i < children.length; i++){
            children[i].remove();
        }
    }
}


window.onload = ()=>{
    let addBtn = document.getElementById("submit");
    addBtn.addEventListener("click", (e)=>{e.preventDefault()})
    addBtn.onclick = addProduct;

    let cleanBtn = document.getElementById("clear");
    let listaElementos = document.getElementById("grocery--list");
    cleanBtn.addEventListener("click", ()=>{cleanList(listaElementos)})
}