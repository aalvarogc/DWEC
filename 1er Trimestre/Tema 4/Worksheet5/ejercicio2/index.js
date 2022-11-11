expresiones=[
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Nombre
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Apellidos
    /^[XYZ]?\d{5,8}[A-Z]$/, // DNI
    /^([\w-\.]+@([\w-])+\.)+[\w-]{2,4}$/, // Email
    /^[0-9]{9}$/, // Teléfono
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/ // Username
]

wrongPatternText = [
    "El nombre solo puede contener letras",
    "Los apellidos solo puede contener letras",
    "Ejemplo de DNI: 12345678X",
    "Ejemplo de email: email@email.com",
    "Ejemplo de teléfono: 654545454",
    "El nombre de usuario solo puede contener letras",
]

function checkExpr(e, expr, wrongText){
    expresion = new RegExp(expr)
    if(expresion.test(e.target.value) == false){
        e.target.style.border = "2px solid red";
        document.getElementsByClassName(`${e.target.id}`)[0].innerHTML = wrongText;
    }else{
        e.target.style.border = "2px solid green";
    }
}

window.onload = ()=>{
    inputs = document.getElementsByTagName("input");
    for(let i=0; i < expresiones.length; i++){
        inputs[i].addEventListener("blur", (e)=>{checkExpr(e, expresiones[i], wrongPatternText[i])})
    }
}