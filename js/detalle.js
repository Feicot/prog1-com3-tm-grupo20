window.addEventListener("load", function() {
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get("id");
fetch("https://fakestoreapi.com/products/"+id)
            .then(res=>res.json())
            .then(json=>cargar(json))



})

function cargar (Elitem){
    
        document.getElementById ("titulo").innerHTML=Elitem.title;
        document.getElementById ("descripcion").innerHTML=Elitem.description;
        document.getElementById ("precio").innerHTML=Elitem.price;
        document.getElementById ("foto").src=Elitem.image;
        
    }