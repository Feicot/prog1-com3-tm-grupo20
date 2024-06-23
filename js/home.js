

window.addEventListener("load", function() {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res=>res.json())
            .then(json=>cargarh1(json))
            fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(json=>cargarh2(json))
    })

function cargarh1 (Lositems){
for(j=0;j<=3;j++){
    document.getElementById ("titulo"+(j+1)).innerHTML=Lositems[j].title;
    document.getElementById ("descripcion"+(j+1)).innerHTML=Lositems[j].description;
    document.getElementById ("precio"+(j+1)).innerHTML=Lositems[j].price;
    document.getElementById ("foto"+(j+1)).src=Lositems[j].image;
}

}

function cargarh2 (Lositems){
    for(j=0;j<=3;j++){
        document.getElementById ("tituloh"+(j+1)).innerHTML=Lositems[j].title;
        document.getElementById ("descripcionh"+(j+1)).innerHTML=Lositems[j].description;
        document.getElementById ("precioh"+(j+1)).innerHTML=Lositems[j].price;
        document.getElementById ("fotoh"+(j+1)).src=Lositems[j].image;
    }
    
    }



