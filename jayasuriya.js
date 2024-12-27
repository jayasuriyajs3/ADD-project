
<script>
    let cart = [];
    const splashScreen = document.getElementById('splash-screen');
    const loginPage = document.getElementById('login-page');
    const menuPage = document.getElementById('menu-page');
    const previewPage = document.getElementById('preview-page');
    const paymentPage = document.getElementById('payment-page');
    const paymentProcedure = document.getElementById('payment-procedure');
    const feedbackSection = document.getElementById('feedback-section');

    setTimeout(() => {
        splashScreen.style.display = 'none';
        loginPage.style.display = 'flex';
    }, 2000);

    document.getElementById('login-button').addEventListener('click', () => {
        loginPage.style.display = 'none';
        menuPage.style.display = 'block';
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const price = parseInt(button.getAttribute('data-price'));
            const now = new Date();
            cart.push({
                item,
                price,
                date: now.toLocaleDateString(),
                day: now.toLocaleString('default', { weekday: 'long' }),
                time: now.toLocaleTimeString(),
            });
            alert(`${item} added to cart!`);
        });
    });

    document.getElementById('proceed-to-cart').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty! Please add items before proceeding.');
            return;
        }
        menuPage.style.display = 'none';
        previewPage.style.display = 'block';
        showCartPreview();
    });

    function showCartPreview() {
        const previewTableBody = document.querySelector('#preview-table tbody');
        const previewTotal = document.getElementById('preview-total');
        previewTableBody.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.item}</td>
                <td>₹${item.price}</td>
                <td>${item.date}</td>
                <td>${item.day}</td>
                <td>${item.time}</td>
            `;
            previewTableBody.appendChild(row);
            total += item.price;
        });
        previewTotal.textContent = total;
    }

    document.getElementById('proceed-to-payment').addEventListener('click', () => {
        previewPage.style.display = 'none';
        paymentProcedure.style.display = 'block';
    });

    document.getElementById('submit-payment').addEventListener('click', () => {
        // You can validate payment information here, and if valid, proceed.
        paymentProcedure.style.display = 'none';
        paymentPage.style.display = 'block';
        generateInvoice();
    });

    function generateInvoice() {
        const invoiceTableBody = document.querySelector('#invoice-table tbody');
        const totalAmount = document.getElementById('total-amount');
        invoiceTableBody.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.item}</td>
                <td>₹${item.price}</td>
                <td>${item.date}</td>
                <td>${item.day}</td>
                <td>${item.time}</td>
            `;
            invoiceTableBody.appendChild(row);
            total += item.price;
        });
        totalAmount.textContent = total;
    }

    document.getElementById('generate-invoice').addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text('Invoice', 10, 10);
        doc.autoTable({
            head: [['Dish', 'Price', 'Date', 'Day', 'Time']],
            body: cart.map(item => [item.item, `₹${item.price}`, item.date, item.day, item.time]),
        });
        doc.save('invoice.pdf');
        paymentPage.style.display = 'none';
        feedbackSection.style.display = 'block';
    });

    document.getElementById('submit-feedback').addEventListener('click', () => {
        alert('Thank you for your feedback!');
        feedbackSection.style.display = 'none';
    });
</script>