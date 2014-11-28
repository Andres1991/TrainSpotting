
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();

    // Messages
    var messages = $('.messages');

    // Recieve Update Event From The Server
    socket.on('updateMessages', function(html){

      // Update chat
      messages.html(html);

    });

    socket.on('honk', function(){

      // play sound
      
      
      new Audio('assets/honk.mp3').play();

    });
 // Listen to when a user clicks on the honk


    $('.btn2').on('click', function(){

      socket.emit('honkHorn');

    });


    // Listen to when a user clicks on the button
    $('.btn').on('click', function(){

      // Get the users text
      var text = $('input').val();

      // Clean out the users input...
      $('input').val('');

      // Emit the message to the server
      socket.emit('newMessage', text);

    });

});