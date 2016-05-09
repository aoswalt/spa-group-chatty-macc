'use strict';

var Chatty = (function(json) {
  json.loadJSON = function(callback) {
    var myRequest = new XMLHttpRequest();

    myRequest.addEventListener("load", function() {
      var messagesJSON = JSON.parse(this.responseText);
      callback(messagesJSON.messages);
    });

    myRequest.open("GET", "messages.json");
    myRequest.send();
  };

  return json;
}(Chatty || {}));
