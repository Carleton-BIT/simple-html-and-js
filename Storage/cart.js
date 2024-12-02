function loadCart() {
    console.log(`Loaded page for the first time!`)
}

function addToCart(item) {
    console.log(`Added ${item} to cart!`)
}

function clearCart() {
    console.log(`Cleared cart!`)
}

document.addEventListener('DOMContentLoaded', loadCart);
