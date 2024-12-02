function loadCart() {
    console.log(`Loaded page for the first time!`)
    let cartItems = document.querySelector('#cart-items')
    cartItems.innerHTML = ''

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    cart.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item
        cartItems.appendChild(li)
    })
    

}

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(item)
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCart()
}

function clearCart() {
    console.log(`Cleared cart!`)
    localStorage.removeItem('cart')
    loadCart()
}

document.addEventListener('DOMContentLoaded', loadCart);
