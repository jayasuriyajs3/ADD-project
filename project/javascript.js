const loginForm = document.getElementById('login-form');
const signupLink = document.getElementById('signup-link');
const authSection = document.getElementById('auth-section');
const homeSection = document.getElementById('home-section');
const cartItems = document.getElementById('cart-items');
const confirmOrderButton = document.getElementById('confirm-order');
const confirmationSection = document.getElementById('confirmation-section');
const orderSummary = document.getElementById('order-summary');
const paymentSection = document.getElementById('payment-section');
const totalAmount = document.getElementById('total-amount');

let cart = [];

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    authSection.style.display = 'none';
    homeSection.style.display = 'block';
});

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sign-up feature coming soon!');
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const foodItem = button.parentElement;
        const itemName = foodItem.querySelector('h3').innerText;
        const itemRating = foodItem.querySelector('p:nth-child(2)').innerText;
        const itemCuisine = foodItem.querySelector('p:nth-child(3)').innerText;

        cart.push({ name: itemName, rating: itemRating, cuisine: itemCuisine });

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerText = `${itemName} - ${itemRating} - ${itemCuisine}`;
        cartItems.appendChild(cartItem);

        confirmOrderButton.style.display = 'block';
    });
});

confirmOrderButton.addEventListener('click', () => {
    homeSection.style.display = 'none';
    confirmationSection.style.display = 'block';

    orderSummary.innerHTML = cart.map(item => `<p>${item.name} - ${item.rating} - ${item.cuisine}</p>`).join('');
});

document.getElementById('proceed-to-payment').addEventListener('click', () => {
    confirmationSection.style.display = 'none';
    paymentSection.style.display = 'block';

    const total = cart.length * 100; // Assuming each dish costs 100
    totalAmount.innerText = `₹${total}`;
});

document.getElementById('pay-now').addEventListener('click', () => {
    alert('Payment successful! Thank you for your order.');
    window.location.reload();
});
