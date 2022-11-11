let palabras = ["londres","madrid","granada","benidorm","galicia"];

function checkLetter(letter, palabra){
    let answerLetter = document.querySelectorAll("#answer span");
    if(palabra.includes(letter.innerHTML)){
        for(let i=0; i < palabra.length; i++){
            if(letter.innerHTML == palabra[i]){
                answerLetter[i].innerHTML = letter.innerHTML;
                letter.style.backgroundColor = "lime";
                letter.style.color = "white";
            }
        }
    }else{
        letter.style.backgroundColor = "red";
        letter.style.color = "white";
        loseLive();
    }
}

function loseLive(){
    lives--;
    if(lives == 0){
        document.getElementById("lose").innerHTML = "Has perdido";
    }
    hearts = document.getElementsByTagName("img");
    for(let i=lives; i < 10; i++){
        hearts[i].src = "./emptyHeart.png";
        hearts[i].classList.add("lostLife");
    }
}

function checkResult() {
    let contadorWin = 0;
    for(let i = 1; i < answer.childNodes.length; i++){
        console.log(answer.childNodes[i])
        if(answer.childNodes[i].innerHTML != ""){
            contadorWin++;
        }
    }
    console.log(contadorWin)
    console.log(wordToGuess.length)
    if(contadorWin == wordToGuess.length){
        document.getElementById("win").innerHTML = "HAS GANADO"
    }
}

window.onload = ()=>{
    lives = 10;
    let randomWord = Math.floor(Math.random() * palabras.length);
    wordToGuess = palabras[randomWord];
    console.log(wordToGuess)
    let answer = document.getElementById("answer");
    for(let i=0; i < wordToGuess.length; i++){
        let elemento = document.createElement("span");
        answer.appendChild(elemento);
    }

    let letrasAlphabet = document.querySelectorAll(".alphabet span");
    letrasAlphabet.forEach(letra => {
        letra.onclick = ()=>{
            checkLetter(letra,wordToGuess);
            checkResult();
        };
    });
}