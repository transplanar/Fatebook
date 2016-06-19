(function(){
  function PagesSrv($resource) {
    // return $resource('/pages_data.json',{},
    // return $resource('/pages/:id.json',{},
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
