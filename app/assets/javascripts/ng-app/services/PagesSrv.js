(function(){
  function PagesSrv($resource) {
    return $resource('/pages/:id.json',{},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    });
  }

  angular
    .module('fatebook')
    .factory('PagesSrv',['$resource', PagesSrv])
})()
