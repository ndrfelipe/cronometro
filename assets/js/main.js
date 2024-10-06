
const clock = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");


let segundos = 0
let timer;

function iniciaRelogio() {
     timer = setInterval(() => {
        segundos++
        clock.innerHTML = criaSegundos(segundos)
    }, 1000);

    return timer
}

iniciar.addEventListener("click", function (event) {
    clearInterval(timer);
    iniciaRelogio();

    clock.style.backgroundColor = "#fff"
    clock.style.color = "rgb(70, 130, 180)"
    clock.style.transition = "0.9s"
});

pausar.addEventListener("click", function (event) {
    clearInterval(timer);
    
    clock.style.backgroundColor = "rgb(70, 130, 180)"
    clock.style.color = "#fff"
    clock.style.transition = "0.5s"
});

zerar.addEventListener("click", function (event) {
    clearInterval(timer);
    clock.innerHTML = "00:00:00"
    segundos = 0

    clock.style.backgroundColor = "#000"
    clock.style.color = "orange"
    clock.style.transition = "0.5s"
});


function criaSegundos(seg){
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}



