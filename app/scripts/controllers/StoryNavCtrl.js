(function(){
  function StoryNavCtrl($scope){
    var testStory = {
      title: 'TestStory Title',
      description: 'Test of story nav system.',
      summary: 'First story to test story nav system',
      keywords: ['test'],
      system: 'default',
      rating: 'unrated', //TODO set this as default in Rails
      pages: []
    };
    
    $scope.currentStory = testStory;
    
    
    //NOTE Need to have choices properly generate their ID
    var Page = function(args){
      this.parentPage = args.parentPage;
      this.title = args.title;
      this.summary = args.summary;
      this.content = args.content;
      this.choices = [];
      this.endpoint = args.endpoint;
      
//      for(var i = 0; i < args.choices.length; i++){
//        this.choices.push()
//      }
      
      /**************************************/
      //FIXME dfsljfasdj
      this.tempChoices = args.choices;
      /**************************************/
      
      this.init = function(){
        this.id = $scope.getPageID(this.parentPage);
        console.log('assigned id', this.id);
      }
      
//      this.initChoices = function(){
//        for(var i = 0; i < this.tempChoices.length; i++){
//          this.choices.push(new Choice(this.tempChoices[i].text, i, this));    
//        }
//      }
    };
    
    $scope.getPageID = function(parentPage, index=-1){
      console.log('recieved', [parentPage,index]);
      if(parentPage===null){
        return '1';
      }else{
        console.log('non-null parent', parentPage.title)
        var lastChar = parentPage.id[parentPage.id.length -1];
//        var childIndex = parentPage.choices.indexOf(page);
//        console.log('childIndex', childIndex);
        
        if(angular.isNumber(parseInt(lastChar))){
          return parentPage.id + indexToAlpha(index);
        }else{
          return parentPage.id + (index+1);
        }
      }
    }
      
    var indexToAlpha = function(index){
//      console.log('convert to ', String.fromCharCode(index + 65));
      return String.fromCharCode(index + 65);
    }
    
    function Choice(text, index, parentPage){
//      console.log('index in choice', index);
      return {text: text, dest: $scope.getPageID(parentPage, index)};
    }
    
    $scope.currentStory.pages.push(
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
    
    $scope.currentPage = $scope.currentStory.pages[0];
    
    $scope.currentStory.pages.push(
      new Page(
        {
          parentPage: $scope.currentStory.pages[0],
          title: 'Left door', //String
          summary: 'First page', //String
          content: 'You entered the left door.', //String
          choices: [ ],
          endpoint: true //Boolean
        }
      )
    );
    
    $scope.currentStory.pages.push(
      new Page(
        {
          parentPage: $scope.currentStory.pages[0],
          title: 'Right door', //String
          summary: 'First page', //String
          content: 'You entered the right door.', //String
          choices: [ ],
          endpoint: true //Boolean
        }
      )
    );
    
    var getPageByID = function(id){
      for(var i in $scope.currentStory.pages){
        if($scope.currentStory.pages[i].id === id){
          return $scope.currentStory.pages[i];
        }
      }
      
      return undefined;
    }
    
    $scope.setPage = function(pageID){
      $scope.currentPage = getPageByID(pageID);
    }
    
    var initializePages = function(){
      for (var i = 0; i < $scope.currentStory.pages.length; i++){
        $scope.currentStory.pages[i].init();
      }
      
//      for (var i = 0; i < $scope.currentStory.pages.length; i++){
//        $scope.currentStory.pages[i].initChoices();
//      }
    }
    
    $scope.$on('$viewContentLoaded', function(){
      console.log('content loaded');
      initializePages();
    });
  }
  
  angular
    .module('fatebook')
//    .controller('StoryNavCtrl', ['StoryNavSrv', StoryNavCtrl]);
    .controller('StoryNavCtrl', ['$scope', StoryNavCtrl]);
})();