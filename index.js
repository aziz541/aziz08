document.addEventListener('DOMContentLoaded', function() {
    // Select all items in the cart
    const items = document.querySelectorAll('.item');

    // Initialize total price
    let totalPrice = calculateTotalPrice();
    updateTotalPrice();

    // Attach event listeners to each item
    items.forEach(item => {
        const quantityElement = item.querySelector('.quantity');
        const priceElement = item.querySelector('.price');
        const deleteButton = item.querySelector('.delete-btn');
        const plusButton = item.querySelector('.plus');
        const minusButton = item.querySelector('.minus');
        const likeButton = item.querySelector('.like-btn');

        // Handle delete button click
        deleteButton.addEventListener('click', function() {
            item.remove();
            totalPrice = calculateTotalPrice();
            updateTotalPrice();
        });

        // Handle plus button click
        plusButton.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            totalPrice = calculateTotalPrice();
            updateTotalPrice();
        });

        // Handle minus button click
        minusButton.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                totalPrice = calculateTotalPrice();
                updateTotalPrice();
            }
        });

        // Handle like button click
        likeButton.addEventListener('click', function() {
            likeButton.classList.toggle('active');
        });
    });

    // Function to calculate total price
    function calculateTotalPrice() {
        let total = 0;
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.slice(1));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        return total;
    }

    // Function to update total price in the UI
    function updateTotalPrice() {
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    }
});
