document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(product => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const img = document.createElement('img');
            img.src = '../img/camperaG2.png'; // Asegúrate de usar la ruta correcta para tus imágenes
            img.alt = product.name;

            const nameP = document.createElement('p');
            nameP.textContent = product.name;

            const priceP = document.createElement('p');
            priceP.textContent = `$${product.price}`;

            const quantityP = document.createElement('p');
            quantityP.textContent = `Cantidad: ${product.quantity}`;

            itemDiv.appendChild(img);
            itemDiv.appendChild(nameP);
            itemDiv.appendChild(priceP);
            itemDiv.appendChild(quantityP);

            cartItemsContainer.appendChild(itemDiv);

            totalPrice += product.price * product.quantity;
        });

        totalPriceElement.textContent = `Total: $${totalPrice}`;
    }

    renderCart();
});
    function redirectToCart() {
        window.location.href = 'carrito.html';
    }
});