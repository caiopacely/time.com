let milesimos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let marcas = [];
let intervalId;
const button = document.getElementById("play");
const mostrarMarcas = document.getElementById("marcas");
const doc = document.getElementById("comandos");
const docButons = document.getElementById("buttons");


function play() {   
    const action = button.getAttribute('action');   
    if (action === 'pause') {
        clearInterval(intervalId);
        button.setAttribute('action', 'start');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        intervalId = setInterval(updateTimer, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
}

function updateTimer() {
    milesimos++;

    if(milesimos==100){
        milesimos=0
        segundos++
    }
    if(segundos==60){
        segundos=0
        minutos++
    }
    if(minutos==60){
        minutos=0
        horas++
    }
    
    document.getElementById("mile").innerHTML = milesimos < 10 ? "0" + milesimos : milesimos;
    document.getElementById("seg").innerHTML = segundos < 10 ? "0" + segundos + ":" : segundos + ":";
    document.getElementById("min").innerHTML = minutos < 10 ? "0" + minutos + ":" : minutos + ":";
    document.getElementById("hor").innerHTML = horas < 10 ? "0" + horas + ":" : horas + ":";
}   

function zerar(){
    clearInterval(intervalId);
    mostrarMarcas.innerHTML = "";
    doc.style.justifyContent = "center"
    marcas = []
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    segundos = 0;
    milesimos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById("mile").innerHTML = "00";
    document.getElementById("seg").innerHTML = "00:";
    document.getElementById("min").innerHTML = "00:";
    document.getElementById("hor").innerHTML = "00:";
}

function marcar(){
    doc.style.justifyContent = "flex-start"
    docButons.style.marginTop = "40px"
    let stringFormat = "";
    marcas.push(`Marca ${marcas.length + 1} ${document.getElementById("hor").innerHTML}${ document.getElementById("min").innerHTML }${document.getElementById("seg").innerHTML}${document.getElementById("mile").innerHTML}`)
    
    marcas.forEach(element => {
        stringFormat += `${element} <br><br> ` ;
    });

    mostrarMarcas.innerHTML = stringFormat;
}
const main = document.getElementById("main");
const header = document.getElementById("header");
const botTema = document.getElementById("tema");
const cronometro = document.getElementById("cronometro");
const bot1 = document.getElementById("play");
const bot2 = document.getElementById("marca");
const bot3 = document.getElementById("reniciar");

function darklight(){
    const temaAtual = botTema.getAttribute('action');
    if(temaAtual==="white"){
        main.style.backgroundColor = "black";
        header.style.backgroundColor = "#464a5c";
        botTema.style.backgroundColor = "#464a5c";
        doc.style.backgroundColor = "#1d1c27";
        cronometro.style.backgroundColor = "#464a5c";
        bot1.style.backgroundColor = "#464a5c";
        bot2.style.backgroundColor = "#464a5c";
        bot3.style.backgroundColor = "#464a5c";
        botTema.setAttribute('action', 'black');
    }
    else{
        main.style.backgroundColor = "white";
        header.style.backgroundColor = "#3d9ce7";
        botTema.style.backgroundColor = "#3d9ce7";
        doc.style.backgroundColor = "#345b80";
        cronometro.style.backgroundColor = "#3d9ce7";
        bot1.style.backgroundColor = "#3d9ce7";
        bot2.style.backgroundColor = "#3d9ce7";
        bot3.style.backgroundColor = "#3d9ce7";
        botTema.setAttribute('action', 'white');
    }
    
    
}