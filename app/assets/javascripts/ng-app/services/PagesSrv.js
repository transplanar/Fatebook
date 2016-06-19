(function(){
  function PagesSrv($resource) {
    return $resource('/pages',{},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    });
  }

  angular
    .module('fatebook')
    .factory('PagesSrv',['$resource', PagesSrv])
})()
