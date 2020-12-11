const cubo = (numero)=>{
	return 5 * 5 * 5;
}

console.log(cubo(5));

const buscarPorDni = dni => console.log(`Encontrado ${dni}`);

buscarPorDni("7578545156456");

let numeros = [4,5,6,7,1,32,55,15,2,32,41];

///let pares = numeros.filter(num => {
///	if(num % 2 === 0){
///		return num;
///	}
///})
///console.log(pares);


let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);