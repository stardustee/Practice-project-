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
        console.info(`full Name   : ${fullName.value}
          email Address  : ${emailAddress.value}
          contact Number : ${contactNumber.value}
          your Message   : ${message.value}`);
      });

      cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (confirm("Are you sure?")) {
          location.href = "/Home";
        }
      });
    }
  }

  window.addEventListener("load", Start);
})();