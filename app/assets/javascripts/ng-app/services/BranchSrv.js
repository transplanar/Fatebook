(function(){
  function BranchSrv($resource) {
    // return $resource('/branches/:destination_id.json',{},
    return $resource('/branches',{},
    {
      query: {method: 'GET', isArray: true},
      // show: {method: 'GET'}
      // update: {method: 'PUT', params: {id: '@id'}},
      // update: {method: 'PUT'},
      // delete: {method: 'DELETE', params: {id: '@id'}}
    });
  }

  angular
    .module('fatebook')
    .factory('BranchSrv',['$resource', BranchSrv])
})()
