angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, ToDos, $ionicModal) {

  $scope.todos = ToDos;

  console.log($scope.todos);

  $scope.refreshtodo = function(){
    $scope.newtodo = {
      title:'',
      description:'',
      completed:false
    };
  };


  $ionicModal.fromTemplateUrl('templates/my-taskmodal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openTaskModal = function() {
    $scope.refreshtodo();
    $scope.modal.show();
  };
  $scope.closeTaskModal = function() {
    $scope.modal.hide();
  };

  $scope.addTask = function(){

    console.log("Adding task...");

    //Update firebase object
    $scope.todos.$add({
        "title": $scope.newtodo.title,
        "description":$scope.newtodo.description,
        "completed":$scope.newtodo.completed
      });

    $scope.refreshtodo();

    //Hide the modal
    $scope.modal.hide();

  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
