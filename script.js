const cartItems = [];
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.closest(".product");
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);

        cartItems.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}
