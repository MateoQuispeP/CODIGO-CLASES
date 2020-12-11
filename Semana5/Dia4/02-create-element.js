let body = document.querySelector("body")
let h1 = document.createElement("h1");
h1.innerText = "El titulo de la App";
console.log(h1);


body.appendChild(h1);

h1.onclick = () => {
    alert("Hicieron Click alvvvv!");
}
