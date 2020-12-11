

const saludo =()=>{
	console.log("Imprimiendo saludo");
}

console.log("Hola");

setTimeout (()=>{
	console.log("Asincrono 2seg.");
},2000)

console.log("Como estas");

saludo();

setTimeout (()=>{
	console.log("Asincrono 3seg.");
},3000)

console.log("Hasta Pronto Joven");



const buscarPorDni = (dni) =>{
	setTimeout(()=>{
		return "Jorge Garnica"
	}, 300);
}

let nombre = buscarPorDni("48596235");
console.log(nombre);