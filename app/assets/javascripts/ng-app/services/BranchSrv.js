(function(){
  function BranchSrv($resource) {
    return $resource('/branches/:id.json',{},
    {
      show: {method: 'GET'}
      // update: {method: 'PUT', params: {id: '@id'}},
      // update: {method: 'PUT'},
      // delete: {method: 'DELETE', params: {id: '@id'}}
    });
  }

  angular
    .module('fatebook')
    .factory('BranchSrv',['$resource', BranchSrv])
})()
