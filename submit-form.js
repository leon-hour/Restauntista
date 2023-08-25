// Handle form submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get the form values
    const email = document.getElementById('email').value.trim();
    const newsletter = document.getElementById('newsletter').checked;
  
    // Process the form data
    const data = {
      email: email,
      newsletter: newsletter
    };
  
    // Save the form data to local storage
    localStorage.setItem('formSubmission', JSON.stringify(data));

  });
  