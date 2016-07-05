(function(){
  function BranchSrv($resource) {
    return $resource('/branches/find_by_destination/:id',{},
    {
      findPageByDestination: {method: 'GET'}
    });
  }

  angular
    .module('fatebook')
    .factory('BranchSrv',['$resource', BranchSrv])
})()
