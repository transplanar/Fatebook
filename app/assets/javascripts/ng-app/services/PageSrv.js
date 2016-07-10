(function(){
  function PageSrv($resource) {
    var PageSrv = {};

    // return $resource('/pages/:id.json', {id: '@id'},
    PageSrv.db = $resource('/pages/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE', isArray: true},
    });

    return PageSrv;
  }

  angular
    .module('fatebook')
    .factory('PageSrv',['$resource', PageSrv])
})()
