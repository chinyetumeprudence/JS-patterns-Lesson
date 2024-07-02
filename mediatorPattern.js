const users = function(name){
    this.name = name;
    this.chatroom =  null;
}

users.prototype = {
    send: function(message, to) {
      if (this.chatroom) {  // Check if chatroom is set before calling send
        this.chatroom.send(message, this, to);
      } else {
        console.error("User not registered in a chatroom!");
      }
    },
    receive: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
    }
  };
  
const Chatroom = function(){
    let users = {}; //list of users

    return{
        register: function(users){
            users[users.name] = users;
            users.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                //single user message
                to.recieve(message, from);
            } else{
                //Mass mesage
                for(key in users){
                    if(users[key] !== from){
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const brad = new users('brad');
const Jaff = new users('Jaff');
const Sara = new users('Sara');

const chatroom = new Chatroom();

chatroom.register('brad');
chatroom.register('Jaff');
chatroom.register('Sara');

brad.send('Hello Jeff', Jaff);
Sara.send('Hello Brad you are the first dev ever', brad);

