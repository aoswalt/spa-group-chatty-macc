/* globals Chatty */
'use strict';

(function() {
  var $messageInput = $("#user-input");
  var $clearButton = $("#clear-button");

  $messageInput.keypress(function(event){
    if (event.which === 13) {
      var $userSelect = $("input[name='user']:checked");

      var message = {
        message: $messageInput.val(),
        user: $userSelect.val(),
        timestamp: Date.now()
      };
      Chatty.addMessage("message-box", message);
      $messageInput.val("");
      $clearButton.prop("disabled", false);
    }
  });

  $clearButton.click(function(){
    $(".message").each(function(index, element) {
      Chatty.removeElement(element.id);
    });
    $clearButton.prop("disabled", true);
  });

  var $body = $("body");
  var $largeText = $("#large-text");
  $largeText.change(function(event){
    $body.toggleClass("large-text", event.target.checked);
  });

  function insertMessagesArray(messagesArray) {
    $.each(messagesArray, function(index, messageObj) {
      Chatty.addMessage("message-box", messageObj);
    });
  }

// event listeners for color picker
  var $newThemeColor = $("#colorTheme");
  var $newFontColor = $("#colorFont");
  var $saveButton = $("#saveBtn");
  $saveButton.click(function(){
    $body.css("background", $newThemeColor.val());
    $body.css("color", $newFontColor.val());
  });

  Chatty.loadJSON(insertMessagesArray);
})();
