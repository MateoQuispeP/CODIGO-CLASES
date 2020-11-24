const notas = [12,02,07,18,0.5,01,15];

/**
 * Arrays ForEach((elemento,i,copia_del_arreglo) => {})
 * 
 * 
 */

 notas.forEach((elemento,i,c) => {
     console.log(elemento);
     console.log(i);
     console.log(c);
     console.log("Impresion");
 });   

 const facturas = [134,2000,3000,5000,240,680];
 facturas.forEach((factura,i)=>{
    console.log(`Monto de Factura ${factura}`);
    console.log(`Posicion de Factura ${i}`);
    console.log("------------------------");
 });