(function(){
  function StoryNavCtrl($scope){
    $scope.testStory = {
      title: 'TestStory Title',
      description: 'Test of story nav system.',
      summary: 'First story to test story nav system',
      keywords: ['test'],
      system: 'default',
      rating: 'unrated', //TODO set this as default in Rails
      pages: []
    };
    
    $scope.getPageID = function(parentPage){
      console.log('getting id for', parentPage);
      
      if(parentPage===null){
        return 1;
      }else{
        var lastChar = parentPage.id[parentPage.id.length -1];

        if(angular.isNumber(lastChar)){
          return parentPage.id + (String.fromCharCode(lastChar.charCodeAt() + 1));
        }else{
          return parentPage.id + (lastChar + 1);
        }
      }
    }
    
    function Choice(text, parent){
      return {text: text, dest: $scope.getPageID(parent)};
    }
    
    $scope.testStory.pages.push(
      {
        parentPage: null,
        id: $scope.getPageID(this.parentPage),
        title: 'Initial page', //String
        summary: 'First page', //String
        content: 'You see two doors. WHich do you choose?', //String
        choices: [
                        new Choice('Left door', this),
                        new Choice('Right door', this)
                       ],
        endpoint: false, //Boolean
      }
    );
    
    $scope.testStory.pages.push(
      {
        parentPage: null,
        id: $scope.getPageID(this.parentPage),
        title: 'Initial page 2', //String
        summary: 'First page', //String
        content: 'You see two doors. WHich do you choose?', //String
        choices: [
          new Choice('Left door', this),
          new Choice('Right door', this)
        ],
        endpoint: false, //Boolean
      }
    );
    
    $scope.testStory.pages.push(
      {
        parentPage: null,
        id: $scope.getPageID(this.parentPage),
        title: 'Initial page 3', //String
        summary: 'First page', //String
        content: 'You see two doors. WHich do you choose?', //String
        choices: [
          new Choice('Left door', this),
          new Choice('Right door', this)
        ],
        endpoint: false, //Boolean
      }
    );
    
    $scope.testStory.pages.push(
      {
        parentPage: null,
        id: $scope.getPageID(this.parentPage),
        title: 'Initial page 4', //String
        summary: 'First page', //String
        content: 'You see two doors. WHich do you choose?', //String
        choices: [
          new Choice('Left door', this),
          new Choice('Right door', this)
        ],
        endpoint: false, //Boolean
      }
    );
    
    var getPageByID = function(pages, id){
      return pages[id] || undefined;
    }
  }
  
  angular
    .module('fatebook')
//    .controller('StoryNavCtrl', ['StoryNavSrv', StoryNavCtrl]);
    .controller('StoryNavCtrl', ['$scope', StoryNavCtrl]);
})();