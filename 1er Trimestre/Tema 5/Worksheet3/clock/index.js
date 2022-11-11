function contar(segundos){
    
}

window.onload = ()=>{
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");

    let segundos = document.getElementById("segundos");
    let minutos = document.getElementById("minutos");

    start.onclick = ()=>{
        let seconds = 1;
        intervalo = setInterval(()=>{
        if(parseInt(segundos.innerHTML) < 9){
            segundos.innerHTML = "0" + seconds;
        }else if(parseInt(segundos.innerHTML) >= 9){
            segundos.innerHTML = seconds;
            if(seconds == 60){
                seconds = 0;
                segundos.innerHTML = "00";
                if(parseInt(minutos.innerHTML) < 9){
                    minuts = parseInt(minutos.innerHTML) + 1;
                    minutos.innerHTML =  "0" + minuts;
                }else if(parseInt(minutos.innerHTML) >= 9){
                    minuts = parseInt(minutos.innerHTML) + 1
                    minutos.innerHTML = minuts;
                }
            }
        }
        seconds++;
    }, 1)};

    stop.onclick = ()=>{
        clearInterval(intervalo);
    }

    reset.onclick = ()=>{
        clearInterval(intervalo);
        segundos.innerHTML = "00";
        minutos.innerHTML = "00";
    }
}