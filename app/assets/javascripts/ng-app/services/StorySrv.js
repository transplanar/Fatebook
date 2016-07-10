(function(){
  function StorySrv($resource) {
    StorySrv = {};

    // return $resource('/stories/:id.json', {id: '@id'},
    StorySrv.db = $resource('/stories/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE', isArray: true},
      published: {method: 'GET', isArray: true, url: '/published_stories'},
      owned: {method: 'GET', isArray: true, url: '/my_drafts/:user_id'}
    });

    return StorySrv;
  }

  angular
    .module('fatebook')
    .factory('StorySrv',['$resource', StorySrv])
})()
