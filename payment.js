// Get a reference to the payment form and pay button
var paymentForm = document.getElementById('payment-form');
var payButton = document.getElementById('pay-button');

// Add a submit event listener to the form
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var name = document.getElementById('name').value;
    var cardNumber = document.getElementById('card-number').value;
    var cvc = document.getElementById('cvc').value;
    var expirationDate = document.getElementById('expiration-date').value;

    // Validate the inputs
    if (name.trim() === '' || cardNumber.trim() === '' || cvc.trim() === '' || expirationDate.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate the card number and CVC
    if (!cardNumber.match(/^\d{13,16}$/)) {
        alert('Please enter a valid card number.');
        return;
    }

    if (!cvc.match(/^\d{3,4}$/)) {
        alert('Please enter a valid CVC.');
        return;
    }

    // Display the success message
    document.getElementById('success-message').style.display = 'block';
    // Blur the form
    paymentForm.style.filter = 'blur(4px)';

    // Reset the form
    paymentForm.reset();
});