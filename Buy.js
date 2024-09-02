document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.querySelector('.cart-button');
    const cartOverlay = document.querySelector('.cart-overlay');
    const cartItemsList = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalCount = document.querySelector('.total-count');
    const totalPrice = document.querySelector('.total-price');
    let cart = [];

    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productDiv = e.target.closest('.product');
            const productName = productDiv.dataset.name;
            const productPrice = parseFloat(productDiv.dataset.price);

            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    cartButton.addEventListener('click', () => {
        cartOverlay.classList.toggle('show');
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;

            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>₹${itemTotal.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(listItem);
        });

        cartCount.textContent = count;
        totalCount.textContent = count;
        totalPrice.textContent = total.toFixed(2);
    }
});
