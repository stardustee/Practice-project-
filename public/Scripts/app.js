/*
     
Sydney Huang 
301068497
October 7 2020

*/


(function () {
  function Start() {
    console.log("App Started...");

    if (document.title === "Contact") {
      let sendButton = document.getElementById("SendButton");
      let cancelButton = document.getElementById("CancelButton");

      let fullName = document.getElementById("fullName");
      let emailAddress = document.getElementById("emailAddress");
      let contactNumber = document.getElementById("contactNumber");
      let message = document.getElementById("message");

      sendButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.info(`Full Name   : ${fullName.value}
          Email Address  : ${emailAddress.value}
          Contact Number : ${contactNumber.value}
          Your Message   : ${message.value}`);
      });

      cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (confirm("Are you sure?")) {
          location.href = "/home";
        }
      });
    }
  }

  window.addEventListener("load", Start);
})();