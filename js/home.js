

window.addEventListener("load", function() {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res=>res.json())
            .then(json=>cargarh1(json))
    })

function cargarh1 (Lositems){
for(j=0;j<=3;j++){
    document.getElementById ("titulo"+(j+1)).innerHTML=Lositems[j].title;
    document.getElementById ("descripcion"+(j+1)).innerHTML=Lositems[j].description;
    document.getElementById ("precio"+(j+1)).innerHTML=Lositems[j].price;
    document.getElementById ("foto"+(j+1)).src=Lositems[j].image;
}

}





