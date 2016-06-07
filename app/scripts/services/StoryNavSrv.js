(function(){
  function StoryNavSrv() {
    var StoryNavSrv = {};

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
      var pages = StoryNavSrv.currentStory.pages;

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
    
    var initializePages = function(){
      for (var i = 0; i < StoryNavSrv.currentStory.pages.length; i++){
        StoryNavSrv.currentStory.pages[i].init();
      }
    }
    
    var getPageFromID = function(id){
      var pages = StoryNavSrv.currentStory.pages;
      console.log(id);
      
      for(var i in pages){
        if(pages[i].id === id){
          return pages[i];
        }
      }
    
      return undefined;
    };

    
//    TEST FUNCTIONS/DATA ****************************************
    var seedTestDataBase = function(){
      var testStory = {
        title: 'TestStory Title',
        description: 'Test of story nav system.',
        summary: 'First story to test story nav system',
        keywords: ['test'],
        system: 'default',
        rating: 'unrated', //TODO set this as default in Rails
        pages: []
      };

      StoryNavSrv.currentStory = testStory;

      StoryNavSrv.currentStory.pages.push(
        new Page(
          {
            parentPage: null,
            title: 'Initial page', 
            summary: 'First page', 
            content: 'You see two doors. Which do you choose?', 
            choices: [
              {text: 'Left door', dest: '1A'},
              {text: 'Right door', dest: '1B'}
            ],
            endpoint: false 
          }
        )
      );

      StoryNavSrv.currentPage = StoryNavSrv.currentStory.pages[0];

      StoryNavSrv.currentStory.pages.push(
        new Page(
          {
            parentPage: StoryNavSrv.currentStory.pages[0],
            title: 'Left door', 
            summary: 'First page', 
            content: 'You entered the left door.', 
            choices: [
              {text: 'Something else', dest: '1A1'}
            ],
            endpoint: true 
          }
        )
      );

      StoryNavSrv.currentStory.pages.push(
        new Page(
          {
            parentPage: StoryNavSrv.currentStory.pages[0],
            title: 'Right door', 
            summary: 'First page', 
            content: 'You entered the right door.', 
            endpoint: true 
          }
        )
      );

      StoryNavSrv.currentStory.pages.push(
        new Page(
          {
            parentPage: StoryNavSrv.currentStory.pages[1],
            title: 'Super last', 
            summary: 'First page', 
            content: 'Even more final.', 
            choices: [
              {text: 'This is the end?', dest: '1A1A'},
              {text: 'This is the beginnging', dest: '1A1B'}
            ],
            endpoint: true 
          }
        )
      );

      StoryNavSrv.currentStory.pages.push(
        new Page(
          {
            parentPage: StoryNavSrv.currentStory.pages[3],
            title: 'Super last', 
            summary: 'First page', 
            content: 'It is indeed the end.', 
            endpoint: true 
          }
        )
      );

      StoryNavSrv.currentStory.pages.push(
        new Page(
          {
            parentPage: StoryNavSrv.currentStory.pages[3],
            title: 'Super last', 
            summary: 'First page', 
            content: 'Nah jk lol.', 
            endpoint: true 
          }
        )
      );
    }
    
    //Initializer ***************************8
    
    StoryNavSrv.initializeStoryData = function(){
      seedTestDataBase();
      initializePages();
      generateBranchIDs();
    };

    return StoryNavSrv;
  }
  
  angular
    .module('fatebook')
    .factory('StoryNavSrv', [StoryNavSrv])
})();