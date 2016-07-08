// REVIEW streamline services
(function(){
  function StoriesSrv($resource) {
    return $resource('/stories/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE', isArray: true},
      published: {method: 'GET', isArray: true, url: '/published_stories'},
      owned: {method: 'GET', isArray: true, url: '/my_drafts/:user_id'}
    });

    // StoriesSrv.many = $resource('/stories',{},
    //   {
    //     // TODO remove query (for now)
    //     // TODO merge many with one?
    //     query: {method: 'GET', isArray: true},
    //     create: {method: 'POST'}
    //   });

    // StoriesSrv.published = $resource('/published_stories',{},
    //   {
    //     query: {method: 'GET', isArray: true}
    //   });
    //
    // StoriesSrv.owned = $resource('/my_drafts/:user_id',{},
    //   {
    //     query: {method: 'GET', isArray: true}
    //   });
    //
    //
    // return StoriesSrv;
  }

  angular
    .module('fatebook')
    .factory('StoriesSrv',['$resource', StoriesSrv])
})()
