angular.module('starter.services', [])

.factory('ToDos', function($firebaseArray) {
  //Static list of todos
  // var todos = [{
  //   id:0,
  //   title:'Bathe',
  //   description:'Use Soap',
  //   completed:false,
  //   datecreated:null
  // },{
  //   id:1,
  //   title:'Eat breakfast',
  //   description:'Not from the gas station next time',
  //   completed:false,
  //   datecreated:null
  // }];

  var todos = new Firebase("https://uwiorbittodo.firebaseio.com/todos");
  return $firebaseArray(todos);

  // return todos;

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
