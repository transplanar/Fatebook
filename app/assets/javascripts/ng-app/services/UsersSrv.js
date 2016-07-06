(function(){
  function UsersSrv($resource) {
    return $resource('/users',{},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    });
  }

  angular
    .module('fatebook')
    .factory('UsersSrv',['$resource', UsersSrv])
})()
