function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname){
    setCookie(cname,"",0);
}

window.onload = ()=>{
    let titulo = document.getElementById("titulo");
    if(getCookie("username")){
        titulo.innerHTML = "Bienvenido, "+getCookie("username")
    }else{
        let username = prompt("¿Cómo te llamas?");
        setCookie("username", username, 0.00347);
        titulo.innerHTML = "Bienvenido, "+getCookie("username")
    }

    if(getCookie("colorfondo")){
        document.body.style.backgroundColor = getCookie("colorfondo");
    }

    if(getCookie("colorletra")){
        document.body.style.color = getCookie("colorletra");
    }

    if(getCookie("tamañoletra")){
        document.body.style.fontSize = getCookie("tamañoletra")+"px";
    }

    let colorFondo = document.getElementById("colorfondo");
    colorFondo.onchange = ()=>{
        setCookie("colorfondo", colorFondo.value, 0.00347);
        document.body.style.backgroundColor = getCookie("colorfondo");
    }

    let colorLetra = document.getElementById("colorletra");
    colorLetra.onchange = ()=>{
        setCookie("colorletra", colorLetra.value, 0.00347);
        document.body.style.color = getCookie("colorletra")+"px";
    }
    
    let tamañoLetra = document.getElementById("tamanoletra");
    tamañoLetra.onchange = ()=>{
        setCookie("tamanoletra", tamañoLetra.value, 0.00347);
        document.body.style.fontSize = getCookie("tamanoletra");
    }
    
    let logout = document.getElementById("logout");
    logout.addEventListener("click", ()=>{
        deleteCookie("username");
        location.reload();
    });
}