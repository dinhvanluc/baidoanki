
document.addEventListener("DOMContentLoaded", function () {
    function renderCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartContainer = document.getElementById("cart-items");
        let totalPrice = 0;

        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p class='text-center text-gray-500'>Giỏ hàng trống!</p>";
            return;
        }

        cart.forEach(product => {
            let item = document.createElement("div");
            item.classList.add("cart-item", "border", "p-4", "rounded-md", "flex", "items-center", "justify-between");

            totalPrice += product.price * product.quantity;

            item.innerHTML = `
                <div class="flex items-center space-x-4">
                    <img src="${product.image}" width="50" class="rounded-md">
                    <p class="font-semibold">${product.name} - $${product.price}</p>
                    <p class="text-gray-700">Số lượng: ${product.quantity}</p>
                </div>
                <button class="remove-item bg-red-500 text-white px-3 py-1 rounded-md" data-id="${product.id}">Xóa</button>
            `;

            cartContainer.appendChild(item);
        });

        document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    }

    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            let productId = event.target.dataset.id;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart = cart.filter(product => product.id !== productId);
            localStorage.setItem("cart", JSON.stringify(cart));

            renderCart();
        }
    });

    document.getElementById("clear-cart").addEventListener("click", function () {
        localStorage.removeItem("cart");
        renderCart();
    });

    renderCart();
});

