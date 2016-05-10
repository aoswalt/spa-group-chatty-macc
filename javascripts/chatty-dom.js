'use strict';

var Chatty = (function(chatty) {
  var $messageBox = $("#message-box");
  var $clearButton = $("#clear-button");

  chatty.removeElement = function(messageId) {
    var $messageElement = $("#" + messageId);
    var $messageTextElement = $messageElement.find(".message-text");

    $messageElement.remove();
    chatty.deleteMessage($messageTextElement.html());

    if($messageBox.children().length < 1) {
      $clearButton.prop("disabled", true);
    }
  };

  return chatty;
}(Chatty || {}));
