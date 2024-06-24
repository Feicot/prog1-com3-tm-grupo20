window.addEventListener("load", function() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let itemsContainer = document.getElementById("items");
    let total = 0;

    carrito.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        let itemImg = document.createElement("img");
        itemImg.src = item.image;
        itemDiv.appendChild(itemImg);

        let itemTitle = document.createElement("p");
        itemTitle.innerHTML = item.title;
        itemDiv.appendChild(itemTitle);

        let itemPrice = document.createElement("p");
        itemPrice.innerHTML = "$" + item.price;
        itemDiv.appendChild(itemPrice);

        total += item.price;

        itemsContainer.appendChild(itemDiv);
    });

    document.getElementById("total").innerHTML = total.toFixed(2);
});