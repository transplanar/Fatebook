(function(){
  function PageSrv($resource) {
    return $resource('/pages/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE'},
      first: {method: 'GET', url: '/pages/get_first_page/:story_id'}
    });
  }

  angular
    .module('fatebook')
    .factory('PageSrv',['$resource', PageSrv])
})()
