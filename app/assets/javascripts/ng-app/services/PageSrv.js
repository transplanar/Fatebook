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
      first: {method: 'GET', url: '/pages/get_first_page/:story_id'}
    });

    return PageSrv;
  }

  angular
    .module('fatebook')
    .factory('PageSrv',['$resource', PageSrv])
})()
