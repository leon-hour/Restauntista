//find us modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
//In the above code, the form is handled using AJAX to demonstrate a server-side submission. Replace
//'your-server-script.php'
//with the actual URL or file path of your server-side script that handles the form submission.
//Make sure to update it according to your server-side environment and requirements.
// Wait for the document to be ready
$(document).ready(function () {
  // Handle form submission
  $("#newsletter-form").submit(function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the form values
    var email = $("#email").val().trim();
    var newsletter = $("#checkbox").is(":checked");

    // Perform client-side form validation
    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // Process the form data
    $.ajax({
      url: "/submit-form.js",
      type: "POST",
      data: {
        email: email,
        newsletter: newsletter,
      },
      success: function (response) {
        // Handle the server's response here
        showMessage("Thank you for subscribing!", "success");
        $("#newsletter-form")[0].reset(); // Reset the form
      },
      error: function (xhr, status, error) {
        showMessage("An error occurred. Please try again later.", "error");
        console.log(xhr.responseText);
      },
    });
  });

  // Email validation function
  function isValidEmail(email) {
    // Use a regular expression to validate the email format
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function showMessage(message, type) {
    var messageContainer = $("#message-container");
    messageContainer.text(message);
    messageContainer.removeClass().addClass(type); // Add a class based on message type (e.g., 'success' or 'error')
  }
});
