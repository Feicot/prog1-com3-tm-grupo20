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
    
    document.addEventListener('DOMContentLoaded', () => {
        const buyNowButton = document.getElementById('buy-now');
    
        buyNowButton.addEventListener('click', () => {
            const productId = buyNowButton.dataset.id;
            const productName = buyNowButton.dataset.name;
            const productPrice = buyNowButton.dataset.price;
    
            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };
    
            addToCart(product);
            window.location.href = 'carrito.html';
        });
    
        function addToCart(product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cart.find(item => item.id === product.id);
    
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }
    
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    });