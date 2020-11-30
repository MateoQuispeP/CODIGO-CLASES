let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let ulJugadores = document.getElementById("listaJugadores");

titulo.innerText =`Titulo <strong>Negrita</strong>`;
subtitulo.innerText = "Subtitulo <strong>Negrita</strong";

const Jugadores = ["Maradona","Cueva","Manco","Cuto"];
let stringLis = "";
Jugadores.forEach((jugador)=>{
    stringLis = stringLis + `<li>${jugador}<li>`;
})  

ulJugadores.innerHTML = stringLis;
ulJugadores.style.listStyle = "none";
