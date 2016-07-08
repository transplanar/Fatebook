// REVIEW streamline services
(function(){
  function StoriesSrv($resource) {
    StoriesSrv = {}

    StoriesSrv.one = $resource('/stories/:id.json', {},
    {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}, isArray: true}
    });

    StoriesSrv.many = $resource('/stories',{},
      {
        query: {method: 'GET', isArray: true},
        create: {method: 'POST'}
      });

    StoriesSrv.published = $resource('/published_stories',{},
      {
        query: {method: 'GET', isArray: true}
      });

    StoriesSrv.owned = $resource('/my_drafts/:user_id',{},
      {
        query: {method: 'GET', isArray: true}
      });


    return StoriesSrv;
  }

  angular
    .module('fatebook')
    .factory('StoriesSrv',['$resource', StoriesSrv])
})()
