(function(){
  function BranchSrv($resource) {
    return $resource('/branches/find_by_destination/:id',{},
    {
      // query: {method: 'GET', url:'/branches/:story_id'}
      query: {method: 'GET', isArray: true, url:'/branches'},
      findPageByDestination: {method: 'GET'}
    });
  }

  angular
    .module('fatebook')
    .factory('BranchSrv',['$resource', BranchSrv])
})()
