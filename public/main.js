$(document).ready(function() {
    //creates Manager object by calling io() function
    var socket = io();
    var input = $('input');
    var name = $("#name");
    var messages = $('#messages');
    var username = $('#username');

    var addMessage = function(message) {
        messages.append('<div>' + message + '</div>');
    };

    var addUser = function(message) {
        username.append('<div>' + message + '</div>');
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
    name.on('keydown', function(event) {
        if (event.keyCode != 13) {
            return;
        }

        var message = name.val();
        addUser(message);
        //sends message to server
        socket.emit('userAlert', message);
        input.val('');

    });
    // listens for new message from client
    socket.on('message', addMessage);
    socket.on('newUser', addUser);
    
});
