document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);

    

    if (username && email && password) {
      alert("Sign up successful!");
    } else {
      alert("Please fill in all fields.");
    }
    window.location.href = "Home.html";
  });
  