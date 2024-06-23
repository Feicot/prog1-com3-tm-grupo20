

window.addEventListener("load", function() {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res=>res.json())
            .then(json=>cargarh("j",json))
            fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(json=>cargarh("h",json))
            fetch("https://fakestoreapi.com/products/category/women's%20clothing")
            .then(res=>res.json())
            .then(json=>cargarh("m",json))
    })

function cargarh (prefijo,Lositems){
for(j=0;j<=3;j++){
    document.getElementById ("titulo"+prefijo+(j+1)).innerHTML=Lositems[j].title;
    document.getElementById ("descripcion"+prefijo+(j+1)).innerHTML=Lositems[j].description;
    document.getElementById ("precio"+prefijo+(j+1)).innerHTML=Lositems[j].price;
    document.getElementById ("foto"+prefijo+(j+1)).src=Lositems[j].image;
}

}





