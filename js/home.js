

window.addEventListener("load", function() {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res=>res.json())
            .then(json=>console.log(json))
    })







