'use strict';

var Chatty = (function(chatty) {
  var messageBox = document.getElementById("message-box");
  var clearButton = document.getElementById("clear-button");

  chatty.removeElement = function(messageId) {
    var messageElement = document.getElementById(messageId);
    var elementByClass = messageElement.getElementsByClassName("message-text")[0];

    messageBox.removeChild(messageElement);
    chatty.deleteMessage(elementByClass.innerHTML);

    if(messageBox.children.length < 1) {
      clearButton.disabled = true;
    }
  };

  return chatty;
}(Chatty || {}));
