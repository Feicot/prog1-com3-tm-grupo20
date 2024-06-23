

window.addEventListener("load", function() {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(json=>console.log(json))
    })







