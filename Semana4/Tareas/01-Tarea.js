/*Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. 
¿Cuál es su salario al cabo de 6
años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
algoritmo y represente la solución mediante el diagrama de flujo, el
pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado. */

let salario=1500;
let total_anual=0;
let total=0;
for(let i=1;i<=6;i++){
    total_anual = salario+(salario*0.10);
    console.log(`El salario del ${i}° año es: ${total_anual}`);
    total+=total_anual;
}
console.log(`El salario de los 6° año es: ${total}`);

