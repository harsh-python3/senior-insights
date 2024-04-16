document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    var isAuthenticated = true;

    if (isAuthenticated) {
        window.location.href = "Home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }

    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  