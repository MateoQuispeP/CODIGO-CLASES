const productosContainer = document.getElementById("productosContainer");
const url = "https://5fd162f2b485ea0016eee4dc.mockapi.io";

let prodcutos = [];
let categorias = [];

const dibujarProductos = ()=>{

}

const getCategorias = ()=>{
    fetch(`${url}/categoria`)
    .then((peticion)=>{
        peticion.json().then((data)=>{
            console.log(data);
            categorias = [...data];

        })
    })
};

const getProductos = ()=>{
    fetch(`${url}/producto`)
    .then((peticion)=>{
        peticion.json().then((data)=>{
            console.log(data);
            productos = [...data];  
        })
    })
};

getCategorias();
getProductos();