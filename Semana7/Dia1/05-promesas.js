const buscarPorDni = (dni) => { return new Promise((resolve, reject) => { setTimeout(() => { resolve("Jorge Garnica Blanco"); }, 1500); }) };

console.log("ALGO AQUI 1");

buscarPorDni("48754512").then((nombre)=>{
	console.log(nombre);	
});

console.log("ALGO AQUI 2");