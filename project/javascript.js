<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canteen Billing Center</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></script>
</head>
<body>

<div id="splash-screen">Welcome to Canteen Billing Center</div>

<div id="login-page" class="container">
    <div class="form-container">
        <h2>Login</h2>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <button id="login-button">Login</button>
    </div>
</div>

<div id="menu-page">
    <h2>Menu</h2>
    <div id="menu-items">
        <div class="food-item">
            <img src="pizza.jpg" alt="Pizza">
            <h3>Pizza</h3>
            <p>₹200</p>
            <button class="add-to-cart" data-item="Pizza" data-price="200">Add to Cart</button>
        </div>
        <div class="food-item">
            <img src="burger.jpg" alt="Burger">
            <h3>Burger</h3>
            <p>₹150</p>
            <button class="add-to-cart" data-item="Burger" data-price="150">Add to Cart</button>
        </div>
        <div class="food-item">
            <img src="sushi.jpg" alt="Sushi">
            <h3>Sushi</h3>
            <p>₹300</p>
            <button class="add-to-cart" data-item="Sushi" data-price="300">Add to Cart</button>
        </div>
    </div>
    <button id="proceed-to-cart">Proceed to Cart</button>
</div>

<div id="preview-page">
    <h2>Cart Preview</h2>
    <table id="preview-table">
        <thead>
            <tr>
                <th>Dish</th>
                <th>Price</th>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <h3>Total: ₹<span id="preview-total">0</span></h3>
    <button id="proceed-to-payment">Proceed to Payment</button>
</div>

<div id="payment-procedure">
    <h2>Payment Procedure</h2>
    <div class="form-container">
        <input type="text" placeholder="Card Number" id="card-number">
        <input type="text" placeholder="Cardholder Name" id="cardholder-name">
        <input type="text" placeholder="CVV" id="cvv">
        <button id="submit-payment">Submit Payment</button>
    </div>
</div>

<div id="payment-page">
    <h2>Invoice</h2>
    <table id="invoice-table">
        <thead>
            <tr>
                <th>Dish</th>
                <th>Price</th>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <h3>Total Amount: ₹<span id="total-amount">0</span></h3>
    <button id="generate-invoice">Generate Invoice</button>
</div>

<div id="feedback-section">
    <h2>Feedback</h2>
    <textarea id="feedback" placeholder="Enter your feedback"></textarea>
    <button id="submit-feedback">Submit Feedback</button>
</div>

<footer>
    &copy; 2024 Canteen Billing Center
</footer>

<script src="javascript.js"></script>
</body>
</html>
