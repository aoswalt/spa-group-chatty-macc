'use strict';

var Chatty = (function(chatty) {
  chatty.loadJSON = function(callback) {
    $.ajax("messages.json").done((data) => callback(data.messages));
  };

  return chatty;
}(Chatty || {}));
