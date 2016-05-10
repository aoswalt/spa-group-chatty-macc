'use strict';

var Chatty = (function(json) {
  json.loadJSON = function(callback) {
    $.ajax("messages.json").done(function(data) {
      callback(data.messages);
    });
  };

  return json;
}(Chatty || {}));
