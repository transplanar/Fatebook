(function(){
  function StoryNavCtrl(){
    var testStory = {
      title: 'TestStory',
      description: 'Test of story nav system.'
    };
    
    
    
    
  }
  
  angular
    .module('fatebook')
    .controller('StoryNavCtrl', ['StoryNavSrv', StoryNavCtrl]);
})();