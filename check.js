// Get the DOM elements for the username, password, and login button fields.
const uname = document.getElementById('uname');
const pwd = document.getElementById('pwd');
const loginBtn = document.getElementById('loginFormBtn');

// Disable the login button by default.
loginBtn.disabled = true;

// Create a function to check the password and username fields.
function checkPassword() {
  // Check if the password and username fields match the values stored in the password and username variables.
  if (pwd.value == password ) {
    // Enable the login button.
    if( uname.value == username){

      loginBtn.disabled = false;
    }
    else{

      uname.addEventListener('keyup', checkPassword);
    }
  } else {
    // Disable the login button.
    loginBtn.disabled = true;
  }
  
}


// Add an event listener to the password field that calls the checkPassword() function whenever the user releases a key.
pwd.addEventListener('keyup', checkPassword);
