(function(){
  function LoginCtrl($scope){
    $scope.login = function(){
      console.log('login')
    };

    $scope.signUp = function(){
      console.log('singup')
    };
  };

  angular
    .module('fatebook')
    .controller('$scope','LoginCtrl',LoginCtrl)
})();
