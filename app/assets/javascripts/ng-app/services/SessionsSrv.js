(function(){
  function SessionsSrv($resource) {
    return $resource('/sessions',{},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    });
  }

  angular
    .module('fatebook')
    .factory('SessionsSrv',['$resource', SessionsSrv])
})()
