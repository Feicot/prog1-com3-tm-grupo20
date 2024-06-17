let articulo1 ={
    nombre:"Chaqueta con estampado Gucci X The North Face",
    precio:"$2500",
    descripcion:"jksjfksskndskkfsn",
    foto:"../img/camperaG2.png.png",

};

let articulo2 ={
    nombre:"Chaqueta con estampado Gucci X The North Face",
    precio:"$3200",
    descripcion:"jksjfksskndskkfsn",
    foto:"../img/camperaG2.png.png",

};

let productos = [articulo1,articulo2];
let productosstr = JSON.stringify (productos);
localStorage.setItem("productoslocal",productosstr);