document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate form submission (you can replace this with your actual backend logic)
        setTimeout(function() {
            // Redirect to the order confirmed page after submitting the form
            window.location.href = 'order-confirmed.html';
        }, 2000); // Adjust the delay as needed
    });
});
