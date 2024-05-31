const LaptopsAPI = "https://dummyjson.com/products/category/laptops";
const AccesoriosAPI = "https://dummyjson.com/products/category/mobile-accessories?limit=13";
let array;

fetch(LaptopsAPI)
.then(res=>res.json())
.then(data => {  
    
    array = data.products;
    array.map((element)=>{
        
        const nombre = element.title;
        const precio = element.price;
        const descripcion = element.description;
        const imagen = element.thumbnail;
        const carro = `<div class="carrito-container">
        <img src="${imagen}" alt="${nombre}">
        <div class="informacion">
            <p class="nombre">${nombre}</p>
            <p class="precio">$ ${precio}</p>
            <p class="descripcion">${descripcion}</p>
            <button class="botonBuscador">Comprar</button>
        </div>
    </div>`;
       
    document.getElementById('contenedor').innerHTML += carro;
        


    })
    
})
fetch(AccesoriosAPI)
.then(res=>res.json())
.then(data => {  
    
    array = data.products;
    array.map((element)=>{
        
        
        const nombre = element.title;
        const precio = element.price;
        const descripcion = element.description;
        const imagen = element.thumbnail;
        const carro = `<div class="carrito-container">
        <img src="${imagen}" alt="${nombre}">
        <div class="informacion">
            <p class="nombre">${nombre}</p>
            <p class="precio">$ ${precio}</p>
            <p class="descripcion">${descripcion}</p>
            <button class="botonBuscador">Comprar</button>
        </div>
    </div>`;
       
    document.getElementById('contenedor').innerHTML += carro;
        


    })
    
})





