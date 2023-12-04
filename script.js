let cart = [];

function addToCart(dishName, price) {
    cart.push({ dishName, price });
    updateCartUI();
}

function updateCartUI() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let div = document.createElement('div');
        div.innerHTML = `${item.dishName} - $${item.price}`;
        cartItems.appendChild(div);
    });
}

function checkout() {
    // Implement checkout logic here
    // For now, just display an alert
    alert('Checkout functionality to be implemented');
}
