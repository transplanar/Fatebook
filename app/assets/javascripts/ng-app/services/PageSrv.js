(function(){
  function PageSrv($resource) {
    // TODO directly return $resource? Need to store currentPage here?
    var PageSrv = {};

    // return $resource('/pages/:id.json', {id: '@id'},
    PageSrv.db = $resource('/pages/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE'},
      first: {method: 'GET', url: '/pages/get_first_page/:story_id'}
    });

    return PageSrv;
  }

  angular
    .module('fatebook')
    .factory('PageSrv',['$resource', PageSrv])
})()
