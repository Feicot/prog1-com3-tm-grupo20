window.addEventListener("load", function() {
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get("id");
fetch("https://fakestoreapi.com/products/"+id)
            .then(res=>res.json())
            .then(json=>cargar(json))



})

function cargar (Elitem){
    
        document.getElementById ("titulo").inner.HTML=Elitem.title;
        document.getElementById ("descripcion").inner.HTML=Elitem.description;
        document.getElementById ("precio").inner.HTML=Elitem.price;
        document.getElementById ("foto").src=Elitem.image;
        
    }
    
    