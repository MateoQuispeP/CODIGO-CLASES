const formRegistro = document.getElementById("formRegistro");
const inputPlaca = document.getElementById("inputPlaca");
const radioNuevo = document.getElementById("radioNuevo");
const radioUsado = document.getElementById("radioUsado");
const textObs = document.getElementById("textObs");

formRegistro.onsubmit= (e) => {
    e.preventDefault();

    let placa = inputPlaca.value;
    console.log(placa);
    let color = selectColor.value;
    console.log(color);
    let estado = radioNuevo.checked === true ? "nuevo" : "usado";
    let obs = textObs.value;

    if(placa.trim() === "" || color === "0" || obs.trim() === "" ){
        formRegistro.classList.add("errorFormulario");
        alert("Error Joven!, llenen todos los campos");

        return;
    }

    let objetoVehiculo = {
        placa:placa,
        color:color,
        estado:estado,
        observaciones:obs
    }
    console.log(objetoVehiculo);
    formRegistro.reset();

    ///window.location.href = "https.//www.google.com";
    ///window.open("https://www.google.com");
}

inputPlaca.focus(); 