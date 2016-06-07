(function(){
  function StoryNavSrv() {
    var StoryNavSrv = {};


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
      console.log('getting page id');
      var pages = StoryNavSrv.currentStory.pages;
      
      console.log('args',id);
      
      for(var i in pages){
        console.log('comparing',pages[i].id,id);
        if(pages[i].id === id){
          return pages[i];
        }
      }
    
      return undefined;
    };

//    StoryNavSrv.$on('$viewContentLoaded', function(){
    StoryNavSrv.initializeStoryData = function(){
      initializePages();
      generateBranchIDs();

//      var pages = StoryNavSrv.currentStory.pages;
    };
    
//    TEST FUNCTIONS/DATA ****************************************
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

    StoryNavSrv.currentPage = StoryNavSrv.currentStory.pages[0];

    StoryNavSrv.currentStory.pages.push(
      new Page(
        {
          parentPage: StoryNavSrv.currentStory.pages[0],
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

    StoryNavSrv.currentStory.pages.push(
      new Page(
        {
          parentPage: StoryNavSrv.currentStory.pages[0],
          title: 'Right door', //String
          summary: 'First page', //String
          content: 'You entered the right door.', //String
          endpoint: true //Boolean
        }
      )
    );

    //TODO Get page by ID for branching?
    StoryNavSrv.currentStory.pages.push(
      new Page(
        {
          parentPage: StoryNavSrv.currentStory.pages[1],
          title: 'Super last', //String
          summary: 'First page', //String
          content: 'Even more final.', //String
          choices: [
            {text: 'This is the end?', dest: '1A1A'},
            {text: 'This is the beginnging', dest: '1A1B'}
          ],
          endpoint: true //Boolean
        }
      )
    );
    
    //TODO Get page by ID for branching?
    StoryNavSrv.currentStory.pages.push(
      new Page(
        {
          parentPage: getPageFromID('1B1'),
//          parentPage: StoryNavSrv.currentStory.pages[2],
          title: 'Super last', //String
          summary: 'First page', //String
          content: 'It is indeed the end.', //String
          endpoint: true //Boolean
        }
      )
    );
    
    //TODO Get page by ID for branching?
    StoryNavSrv.currentStory.pages.push(
      new Page(
        {
          parentPage: getPageFromID('1B1'),
//          parentPage: StoryNavSrv.currentStory.pages[2],
          title: 'Super last', //String
          summary: 'First page', //String
          content: 'Nah jk lol.', //String
          endpoint: true //Boolean
        }
      )
    );

    return StoryNavSrv;
  }
  
  angular
    .module('fatebook')
    .factory('StoryNavSrv', [StoryNavSrv])
})();