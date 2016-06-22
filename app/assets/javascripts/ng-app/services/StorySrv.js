(function(){
  function StorySrv($resource) {
    return $resource('/stories/:id.json', {},
    {
      // show: {method: 'GET'},
      show: {method: 'GET', params: {id: '@id'}},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}},

    });

    // REVIEW Needed?
    // function transformGet(data, headers){
    //   var fromJson = angular.fromJson(data);
    //   fromJson.json = data;
    //   return fromJson;
    // }
  }

  angular
    .module('fatebook')
    .factory('StorySrv',['$resource', StorySrv])
})()
