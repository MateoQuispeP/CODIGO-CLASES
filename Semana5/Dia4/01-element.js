let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let ulJugadores = document.getElementById("listaJugadores");
let btnRegistro = document.getElementById("btnRegistro");
let imagen = document.getElementById("imagen");

titulo.innerText =`Titulo <strong>Negrita</strong>`;
subtitulo.innerText = "Subtitulo <strong>Negrita</strong";

const Jugadores = ["Maradona","Cueva","Manco","Cuto"];
let stringLis = "";
Jugadores.forEach((jugador)=>{
    stringLis = stringLis + `<li>${jugador}<li>`;
})  

ulJugadores.innerHTML = stringLis;
ulJugadores.style.listStyle = "none";

console.log(btnRegistro.classList);


setInterval(()=>{
    btnRegistro.classList.toggle("pressed");
},1000);



/**
 *  element.setAttribute("nombreDeAtributo","ValorDeAtributo");
 * Agrega un atributo HTML a una etiqueta con un determinado valor
 * El  atributo puede o no ser un atributo oficial
 * Ejm: 
 * src => "Atributo oficial de una etiqueta <img>"
 * href => "Aitributo oficial de una etiqutea <a>"
 * id-usuario => "Atributo no oficial de cualquier etiqueta"
 */

const urls = [
    "http://placehold.it/300x300/444444/bbbbbb?text=logo1 - 300x300",
    "http://placehold.it/300x300/888888/bbbbbb?text=logo2 - 300x300",
    "http://placehold.it/300x300/000000/bbbbbb?text=logo3 - 300x300",
    "http://placehold.it/300x300/444444/55bbbb?text=logo4 - 300x300",
    "http://placehold.it/300x300/dddddd/bbbbbb?text=logo5 - 300x300",
    "http://placehold.it/300x300/4444ff/bbbbbb?text=logo6 - 300x300",
    "http://placehold.it/300x300/44dd44/bbbbbb?text=logo7 - 300x300",
    "http://placehold.it/300x300/dd4444/bbbbbb?text=logo8 - 300x300",
    "http://placehold.it/300x300/440088/bbbbbb?text=logo9 - 300x300",
    ];
    
setInterval(()=>{
    let aleatorio = Math.random() * ((urls.length - 1) - 0) + 0
    aleatorio = Math.floor(aleatorio);
    urls.forEach((elemento)=>{
        imagen.setAttribute("src",urls[aleatorio]);
    })

},1000);

console.log(imagen.getAttribute("src"));