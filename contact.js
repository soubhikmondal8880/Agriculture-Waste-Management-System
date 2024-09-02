document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation (can be enhanced)
    if (name && email && subject && message) {
        // Show a thank you message (alert can be replaced with a modal or other UI element)
      //  alert('Thank you for contacting us! Redirecting to the thank you page...');

        // Redirect to t1.html after a short delay
        setTimeout(() => {
            window.location.href = 't1.html';
        }, 20); // 2 seconds delay
    } else {
        alert('Please fill in all fields.');
    }
});
