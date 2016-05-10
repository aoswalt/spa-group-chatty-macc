'use strict';

var Chatty = (function(chatty) {
  var newId = 0;
  var messages = [];
  var $messageInput = $("#user-input");


  function formatTimestamp(ts) {
    var date = new Date(ts);
    var iso = date.toISOString();
    return iso.replace(/(.+)T(.+)\..+/, '$2 $1');
  }

  function deleteMessageListener(event) {
    chatty.removeElement(event.target.parentElement);
  }

  function editMessageListener(event) {
    var $spanElement = $(event.target).siblings(".message-text");
    $messageInput.val($spanElement.html());
    $messageInput.focus();
    chatty.removeElement(event.target.parentElement);
  }


  chatty.addMessage = function(parentId, message) {
    message.id = "message" + newId++;
    messages.push(message);

    $("#" + parentId).append(`
      <div id=${message.id} class="message">
        <span class="message-user">${message.user}</span>
        <span class="message-text">${message.message}</span>
        <span class="message-time">${formatTimestamp(message.timestamp)}</span>
        <input type="button" class="btn btn-primary btn-xs delete-button" value="Delete">
        <input type="button" class="btn btn-primary btn-xs edit-button" value="Edit">
      </div>`);

    $(".delete-button").click(deleteMessageListener);
    $(".edit-button").click(editMessageListener);
  };

  chatty.deleteMessage = function(messageId) {
    var messageIndex = messages.findIndex((elem) => { return elem.id === messageId; });
    messages.splice(messageIndex, 1);
  };

  return chatty;
}(Chatty || {}));
