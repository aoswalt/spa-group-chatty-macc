'use strict';

var Chatty = (function(chatty) {
  var $messageBox = $("#message-box");
  var $clearButton = $("#clear-button");

  chatty.removeElement = function(messageElement) {
    var $messageElement = $(messageElement);
    var $messageTextElement = $messageElement.find(".message-text");

    chatty.deleteMessage($messageTextElement.attr("id"));
    $messageElement.remove();

    if($messageBox.children().length < 1) {
      $clearButton.prop("disabled", true);
    }
  };

  return chatty;
}(Chatty || {}));
