
let count = 0;
let total = 0;

function addToCart(name, price) {
    count++;
    total += price;

    document.getElementById("cart-count").innerText = count;
    document.getElementById("total").innerText = total;

    alert(name + " added to cart successfully!");
}

function clearCart() {
    count = 0;
    total = 0;

    document.getElementById("cart-count").innerText = count;
    document.getElementById("total").innerText = total;
}

function checkout() {
    if (count === 0) {
        alert("Your cart is empty! Please add products first.");
        return;
    }

    alert(
        "Thank you for shopping at Herbelle!\n\n" +
        "Items: " + count +
        "\nTotal Amount: ₹" + total +
        "\n\nYour demo order has been placed successfully!"
    );

    clearCart();
}