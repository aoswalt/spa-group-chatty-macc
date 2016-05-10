'use strict';

var Chatty = (function(chatty) {
  var nextId = 0;
  var messages = {};
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
    messages[nextId] = message;

    $("#" + parentId).append(`
      <div id=${nextId} class="message">
        <span class="message-user">${message.user}</span>
        <span class="message-text">${message.message}</span>
        <span class="message-time">${formatTimestamp(message.timestamp)}</span>
        <input type="button" class="btn btn-primary btn-xs delete-button" value="Delete">
        <input type="button" class="btn btn-primary btn-xs edit-button" value="Edit">
      </div>`);

    $(".delete-button").click(deleteMessageListener);
    $(".edit-button").click(editMessageListener);

    nextId++;
  };

  chatty.deleteMessage = function(messageId) {
    delete messages[messageId];
  };

  return chatty;
}(Chatty || {}));
