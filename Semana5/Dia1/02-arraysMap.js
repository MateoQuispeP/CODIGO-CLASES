/**
 * Array.map((elemento,i,copia_del_arreglo)=>{});
 * En todas las interaciones se debe retornar el mismo elemento
 * o uno diferente ya que a partir de la funcion map, se obtiene
 * un nuevo arreglo con todos esos elementos retornados.
 */

 const usuarios =["daniela","dayana","mariel","kike","rubi"];
 const newUsuarios = usuarios.map((usuario)=>{
    return usuario;
 });
 console.log(newUsuarios);

 const numeros = [15,12,46,78,51,152,7,52];

 const resultados = numeros.map((numeros)=>{
    if(numeros % 2 === 0){
        return numeros * 2;
    }else{
        return numeros / 2;
    }
 });
 console.log(resultados);