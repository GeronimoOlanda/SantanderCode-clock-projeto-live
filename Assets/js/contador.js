// tempo em segundos que queremos
let sec = 180;

//capturando os valores do html
const countDiv = document.getElementById("time");

const secpass = () => {
    let min = Math.floor(sec / 60);
    let segundosRestantes =  sec % 60;

    if(segundosRestantes < 10){
        segundosRestantes= "0" + segundosRestantes;
    }
    
    if(min < 10){
        
    }
}
console.log(secpass())