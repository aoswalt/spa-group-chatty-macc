'use strict';

var Chatty = (function(chat) {
  var newId = 0;
  var messages = [];
  var $userInput = $("#user-input");


  function formatTimestamp(ts) {
    var date = new Date(ts);
    var iso = date.toISOString();
    return iso.replace(/(.+)T(.+)\..+/, '$2 $1');
  }

  function deleteMessageListener(event) {
    chat.removeElement(event.target.parentElement.id);
  }

  function editMessageListener(event) {
    var $spanElement = $(event.target).siblings(".message-text");
    $userInput.val($spanElement.html());
    $userInput.focus();
    chat.removeElement(event.target.parentElement.id);
  }


  chat.addMessage = function(parentId, message) {
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

  chat.deleteMessage = function(messageString) {
    var messageIndex = messages.findIndex(function(elem) {
      return elem.message === messageString;
    });
    messages.splice(messageIndex, 1);
  };

  return chat;
}(Chatty || {}));
