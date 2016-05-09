'use strict';

var Chatty = (function(chat) {
  var newId = 0;
  var messages = [];
  var userInput = document.getElementById("user-input");


  function deleteMessageListener(event) {
    chat.removeElement(event.target.parentElement.id);
  }

  function formatTimestamp(ts) {
    var date = new Date(ts);
    var iso = date.toISOString();
    return iso.replace(/(.+)T(.+)\..+/, '$2 $1');
  }

  function editMessageListener(event) {
    var spanElement = event.target.parentElement.getElementsByClassName("message-text")[0];
    userInput.value = spanElement.innerHTML;
    userInput.focus();
    chat.removeElement(event.target.parentElement.id);
  }


  chat.addMessage = function(parentId, message) {
    message.id = "message" + newId++;
    messages.push(message);

    var messageElement = document.createElement("div");
    messageElement.id = message.id;
    messageElement.className = "message";
    messageElement.innerHTML = `
      <span class="message-user">${message.user}</span>
      <span class="message-text">${message.message}</span>
      <span class="message-time">${formatTimestamp(message.timestamp)}</span>
      <input type="button" class="btn btn-primary btn-xs delete-button" value="Delete">
      <input type="button" class="btn btn-primary btn-xs edit-button" value="Edit">`;
    document.getElementById(parentId).appendChild(messageElement);

    var deleteButton = messageElement.getElementsByClassName("delete-button")[0];
    deleteButton.addEventListener("click", deleteMessageListener);

    var editButton = messageElement.getElementsByClassName("edit-button")[0];
    editButton.addEventListener("click", editMessageListener);
  };

  chat.deleteMessage = function(messageString) {
    var messageIndex = messages.findIndex(function(elem) {
      return elem.message === messageString;
    });
    messages.splice(messageIndex, 1);
  };

  return chat;
}(Chatty || {}));
