window.onload = function(event){
    
    console.log('document is ready');
    //Connect to server with socket
    
    var socket = io();
    
    //Listen "new message" from server
    socket.on('new message',function(data){
        //Get textarea with id="messages"
        var textArea = document.getElementById('messages');
        textArea.value += data.name + ":" + data.message + "\n";
    });
    
    
    var btnSend = document.getElementById('send');
    
    //Add click listener for it
    btnSend.onclick = function(){
        
        var msg = document.getElementById('chat_message');
        var name = document.getElementById('chat_name');
        console.log(msg.value);
        var dataToServer ={
            name:name.value,
            message:msg.value
        }
        //Send message to server
        socket.emit('chat msg',dataToServer);
    }
}