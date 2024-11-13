
function updatePrice() {
    const pricePerUnit = 150.00;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = pricePerUnit * quantity;
    document.getElementById('total-price').textContent = totalPrice;
}

function Buy() {
    const quantity = document.getElementById('quantity').value;
    const pricePerUnit = 150.00;
    const totalPrice = pricePerUnit * quantity;
    alert(`You added ${quantity} item(s) to your cart for Rs. ${totalPrice}`);
}

