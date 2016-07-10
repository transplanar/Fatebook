(function(){
  function StoryNavSrv() {
    var StoryNavSrv = {};
    StoryNavSrv.currentPage = null;
    StoryNavSrv.currentStory = null;

    return StoryNavSrv;
  }

  angular
    .module('fatebook')
    .factory('StoryNavSrv', [StoryNavSrv])
})();
