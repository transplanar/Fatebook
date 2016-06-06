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
      this.id = args.id;
      this.title = args.title;
      this.summary = args.summary;
      this.content = args.content;
      this.choices = args.choices; //Displayed to user
      this.branches = []; //Ref to other pages
      this.endpoint = args.endpoint;
      
      this.init = function(){
        if(this.parentPage){
          this.parentPage.branches.push(this);
        }
      }
    };
    
    var generateBranchIDs = function(){
      var pages = $scope.currentStory.pages;

      pages[0].id = '1';
      
      for(var i = 1; i < pages.length; i++){
          if(pages[i].parentPage){
            var lastChar = pages[i].parentPage.id[pages[i].parentPage.id.length -1];
            var childIndex = pages[i].parentPage.branches.indexOf(pages[i]);
            
            var reg = /^\d+$/;
            
            if(reg.test(lastChar)){
              pages[i].id = pages[i].parentPage.id + indexToAlpha(childIndex);
            }else{
              pages[i].id = pages[i].parentPage.id + (childIndex+1);
            }
        }
      }
    }
      
    var indexToAlpha = function(index){
      return String.fromCharCode(index + 65);
    }
    
    $scope.currentStory.pages.push(
      new Page(
        {
          parentPage: null,
          title: 'Initial page', //String
          summary: 'First page', //String
          content: 'You see two doors. Which do you choose?', //String
          choices: [
                        {text: 'Left door', dest: '1A'},
                        {text: 'Right door', dest: '1B'}
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
          choices: [
            {text: 'Something else', dest: '1A1'}
          ],
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
          endpoint: true //Boolean
        }
      )
    );
    
    $scope.currentStory.pages.push(
      new Page(
        {
          parentPage: $scope.currentStory.pages[1],
          title: 'Super last', //String
          summary: 'First page', //String
          content: 'Even more final.', //String
          endpoint: true //Boolean
        }
      )
    );
    
    $scope.setPage = function(pageID){
      var choices = $scope.currentPage.choices;
      var pages = $scope.currentStory.pages;
      
      for(var i in pages){
        for(var j in choices){
          if (pages[i].id === choices[j].dest){
            $scope.currentPage = pages[i];
          }
        }
      }
      
      return null;
    }
    
    var initializePages = function(){
      for (var i = 0; i < $scope.currentStory.pages.length; i++){
        $scope.currentStory.pages[i].init();
      }
    }
    
    $scope.$on('$viewContentLoaded', function(){
      initializePages();
      generateBranchIDs();
    });
  }
  
  angular
    .module('fatebook')
//    .controller('StoryNavCtrl', ['StoryNavSrv', StoryNavCtrl]);
    .controller('StoryNavCtrl', ['$scope', StoryNavCtrl]);
})();