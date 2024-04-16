const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();
  

    var formData = new FormData(this);
  
    console.log("Request sent:");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    var responseDiv = document.getElementById("response");
    responseDiv.textContent = "Request sent successfully! Check Your Inbox For The Reply";
  });



  // inbox messages

  
  // function toggleDropdown() {
  //   var dropdownContent = document.getElementById("myDropdown");
  //   if (dropdownContent.style.display === "block") {
  //     dropdownContent.style.display = "none";
  //   } else {
  //     dropdownContent.style.display = "block";
  //   }
  // }

  const composerInput = document.querySelector('.composer-input');
const composerButton = document.querySelector('.composer-button');

  