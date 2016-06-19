(function(){
  function StoriesSrv($resource) {
    return $resource('/stories',{},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    });
  }

  angular
    .module('fatebook')
    .factory('StoriesSrv',['$resource', StoriesSrv])
})()
