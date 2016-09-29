$(document).ready(function() {
    //creates Manager object by calling io() function
    var socket = io();
    var input = $('input');
    var messages = $('#messages');

    var addMessage = function(message) {
        messages.append('<div>' + message + '</div>');
    };

    input.on('keydown', function(event) {
        if (event.keyCode != 13) {
            return;
        }

        var message = input.val();
        addMessage(message);
        //sends message to server
        socket.emit('message', message);
        input.val('');

    });
    // listens for new message from client
    socket.on('message', addMessage);
});
