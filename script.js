// Newsletter Handling
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent form from submitting

  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
  } else {
    form.submit(); // submit the form
  }
});

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Order Handling
// TODO What is this code doing?
// get a reference to the button element
const orderButton = document.querySelector('.button');

// add a click event listener to the button
orderButton.addEventListener('click', function (event) {
  // track the click event using your preferred analytics tool
  // for example:
  analytics.track('Button Clicked', {
    buttonName: 'Order Online',
    pageName: 'Homepage'
  });
});
