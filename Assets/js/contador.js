const botao = document.getElementById("btn");


botao.addEventListener("click", () => {
    const segundos = document.getElementById("segundos").value;
// tempo em segundos que queremos
let sec = segundos;

//capturando os valores do html
const countDiv = document.getElementById("time");

const secpass = () => {
    let min = Math.floor(sec / 60);
    let segundosRestantes =  sec % 60;

    if(segundosRestantes < 10){
        segundosRestantes= "0" + segundosRestantes;
    }
    
    if(min < 10){
        min = "0" + min;
    }

    //vai gerar o formato de 02:59
    countDiv.innerHTML = min + ":" + segundosRestantes;

    if(sec > 0){
        sec = sec -1;
    }else{
        countDiv.innerHTML = "acabou";
    }
};

const countDown = setInterval(() => secpass(), 1000);
});