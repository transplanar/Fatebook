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
    
    var Page = function(args){
      this.parentPage = args.parentPage;
      this.title = args.title;
      this.summary = args.summary;
      this.content = args.content;
      this.choices = [];
      this.endpoint = args.endpoint;
      
      this.init = function(){
        this.id = $scope.getPageID(this.parentPage);

        for(var i = 0; i < args.choices.length; i++){
          this.choices.push(new Choice(args.choices[i].text, this));    
        }
      }
        
      this.init();
    };
    
    $scope.getPageID = function(parentPage){
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
    
    function Choice(text, parentPage){
      return {text: text, dest: $scope.getPageID(parentPage)};
    }
    
    $scope.testStory.pages.push(
      new Page(
        {
          parentPage: null,
          title: 'Initial page', //String
          summary: 'First page', //String
          content: 'You see two doors. Which do you choose?', //String
          choices: [
                        {text: 'Left door', parentPage: this},
                        {text: 'Right door', parentPage: this}
                   ],
          endpoint: false //Boolean
        }
      )
    );
    
    $scope.testStory.pages.push(
      new Page(
        {
          parentPage: null,
          title: 'Left door', //String
          summary: 'First page', //String
          content: 'You entered the left door.', //String
          choices: [ ],
          endpoint: true //Boolean
        }
      )
    );
    
    $scope.testStory.pages.push(
      new Page(
        {
          parentPage: null,
          title: 'Right door', //String
          summary: 'First page', //String
          content: 'You entered the right door.', //String
          choices: [ ],
          endpoint: true //Boolean
        }
      )
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