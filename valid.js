// function validateForm() {
//   // Get the values of the form elements
//   var username = document.forms["signupForm"]["username"].value;
//   var email = document.forms["signupForm"]["email"].value;
//   var password = document.forms["signupForm"]["password"].value;
//   var password2 = document.forms["signupForm"]["password2"].value;

//   // Check if any of the fields are empty
//   if (username == "" || email == "" || password == "" || password2 == "") {
//     alert("All fields are required!");
//     return false;
//   }

//   // Check if the passwords match
//   if (password !== password2) {
//     alert("Passwords do not match!");
//     return false;
//   }

//   // If all validation checks pass, return true to submit the form
//   return true;
// }

function validateSignupForm() {
  // Get the values of the form elements
  var username = document.forms["signupForm"]["username"].value;
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;
  var password2 = document.forms["signupForm"]["password2"].value;

  // Check if any of the fields are empty
  if (username == "" || email == "" || password == "" || password2 == "") {
    alert("All fields are required!");
    return false;
  }

  // Check if the passwords match
  if (password !== password2) {
    alert("Passwords do not match!");
    return false;
  }

  // Validate the email using a regular expression
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address!");
    return false;
  }

  // If all validation checks pass, return true to submit the form
  return true;
}