(function(){
  function BranchSrv($resource) {
    return $resource('/branches/find_by_destination/:id',{},
    {
      findPageByDestination: {method: 'GET'},
      query: {method: 'GET', isArray: true, url:'/branches'},
      delete: {method: 'DELETE',  url:'/branches/:id'}
    });
  }

  angular
    .module('fatebook')
    .factory('BranchSrv',['$resource', BranchSrv])
})()
