document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.dataset.productId;
            const productName = event.target.dataset.productName;
            const productPrice = event.target.dataset.productPrice;
            
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            };
            
            addToCart(product);
            renderCart();
        });
    });

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
            cartItemsContainer.appendChild(li);
        });
    }
});