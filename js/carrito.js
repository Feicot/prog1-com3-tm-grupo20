document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.dataset.productId;
            const productName = event.target.dataset.productName;
            const productPrice = event.target.dataset.productPrice;

            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            addToCart(product);
        });
    });

    function addToCart(product) {
        fetch('http://localhost:3000/cart')
            .then(response => response.json())
            .then(cart => {
                const existingProduct = cart.find(item => item.id === product.id);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                    fetch(`http://localhost:3000/cart/${existingProduct.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(existingProduct)
                    }).then(() => {
                        redirectToCart();
                    });
                } else {
                    fetch('http://localhost:3000/cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    }).then(() => {
                        redirectToCart();
                    });
                }
            });
    }

    function redirectToCart() {
        window.location.href = 'carrito.html';
    }
});