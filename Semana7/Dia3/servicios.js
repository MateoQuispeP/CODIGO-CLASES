 export const getCategorias = async ()=>{
    let peticion = await fetch(`${url}/categoria`)
    let data = await peticion.json();
    return data;
}

export const getProductos = ()=>{
    fetch(`${url}/producto`)
    .then((peticion)=>{
        peticion.json().then((data)=>{
            console.log(data); 
        })
    })
};