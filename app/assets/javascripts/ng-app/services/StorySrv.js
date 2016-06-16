(function(){
  function StorySrv($resource) {
    return $resource('/stories/:id.json')
    // return $resource('/stories/:id.json',{},{
    //   query: {method: 'GET', isArray: true}
    //   create: {method: 'POST'}
    //   show: {method: 'GET'}
    //   update: {method: 'PUT', params: {id: '@id'}}
    //   delete: {method: 'DELETE', params: {id: '@id'}}
    // });
  }

  angular
    .module('fatebook')
    .factory('StorySrv',['$resource', StorySrv])
})()
