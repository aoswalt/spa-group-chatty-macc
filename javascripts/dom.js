/* globals Chatty */
'use strict';

(function() {
  var userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function(event){
    if (event.which === 13) {
      var user = document.querySelector("input[name='user']:checked").value;

      var message = {
        message: userInput.value,
        user: user,
        timestamp: Date.now()
      };
      Chatty.addMessage("message-box", message);
      userInput.value = "";
      clearButton.disabled = false;
    }
  });

  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", function(){
    Array.from(document.getElementsByClassName("message")).forEach(function(element) {
      Chatty.removeElement(element.id);
    });
    clearButton.disabled = true;
  });

  var bodyElement = document.querySelector("body");
  var largeText = document.getElementById("large-text");
  largeText.addEventListener("change", function(){
    bodyElement.classList.toggle("large-text", event.target.checked);
  });

  function insertMessagesArray(messagesArray) {
    messagesArray.forEach(function(messageObj) {
      Chatty.addMessage("message-box", messageObj);
    });
  }

// event listeners for color picker
  var saveButton = document.getElementById("saveBtn");
  saveButton.addEventListener("click", function(){
    var newTheme = document.getElementById("colorTheme");
    var newFont = document.getElementById("colorFont");

    var header = document.getElementById("header");
    var body = document.getElementById("body");
    body.style.background = newTheme.value;
    body.style.color = newFont.value;
  });

  Chatty.loadJSON(insertMessagesArray);
})();
