(function(){
  function StoryNavSrv() {
    var StoryNavSrv = {};


    var Page = function(args){
      this.parentPage = args.parentPage;
      this.id = args.id;
      this.content = args.content;

      this.init = function(args){
        this.title = args.title;
        this.summary = args.summary;
        this.content = args.content;
        this.choices = args.choices; //Displayed to user

        return this;
      }

      this.createChildPages = function(){
        if(this.choices){
          for(var i = 0; i < this.choices.length; i++){
            var newPageID = getBranchID(this, i);
            createPlaceholderPage(this, newPageID);

            this.choices[i].dest = newPageID;
          }
        }
      }

      this.init(args);
    };

    var createPlaceholderPage = function(parent, id){
      var newPage = new Page({
        parentPage: parent,
        id: id,
        title: '[AUTO]',
        content: '[[Autogenerated page ' + id + ']]'
      });

      StoryNavSrv.currentStory.pages.push(newPage);
    }

    var getBranchID = function(parent, index){
      if(parent){
        var pages = StoryNavSrv.currentStory.pages;
        var idString = parent.id.toString();
        var lastChar = idString[idString.length -1];

        var reg = /^\d+$/;

        if(reg.test(lastChar)){
          return parent.id + indexToAlpha(index);
        }else{
          return parent.id + (index+1);
        }
      }
    }

    //NOTE Polish - move this into getBranchID?
    var indexToAlpha = function(index){
      return String.fromCharCode(index + 65);
    }

    var initializePages = function(){
      for (var i = 0; i < StoryNavSrv.currentStory.pages.length; i++){
        StoryNavSrv.currentStory.pages[i].createChildPages();
      }
    }

    var getPageFromID = function(id){
      var pages = StoryNavSrv.currentStory.pages;

      //NOTE Better way to search for match? Functional method?
      for(var i in pages){
        if(pages[i].id == id){
          return pages[i];
        }
      }

      return undefined;
    };

    StoryNavSrv.editPage = function(id, args){
      var page = getPageFromID(id);

      if(page){
        page
          .init(args)
          .createChildPages();
      }else{
        console.warn('Attempt to edit with invalid page id "' + id + '" SKIPPING');
      }
    }

    //NOTE Convention to put this at the top, or make more sense here?
    StoryNavSrv.unfinishedPages = [];
    StoryNavSrv.getUnfinishedPages = function(){
      //TODO Refactor to use a Boolean that is changed after a user updates the page
      var pages = StoryNavSrv.currentStory.pages

      for(var i = 0; i < pages.length; i++){
        if(pages[i].title === '[AUTO]'){
          StoryNavSrv.unfinishedPages.push(pages[i]);
        }
      }
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
      createPlaceholderPage(null, 1);
      StoryNavSrv.currentPage = StoryNavSrv.currentStory.pages[0];

      StoryNavSrv
        .editPage('1',
           {
              title: 'Initial page',
              summary: 'First page',
              content: 'You see two doors. Which do you choose?',
              choices: [
                {text: 'Left door'},
                {text: 'Right door'}
              ],
            });
      StoryNavSrv
        .editPage('1A',
           {
            title: 'Left door',
            summary: 'First page',
            content: 'You entered the LEFT door.',
          });
      StoryNavSrv
        .editPage('1B',
           {
            title: 'Left door',
            summary: 'First page',
            content: 'You entered the RIGHT door.',
            choices: [
              {text: 'Or did I?'},
              {text: 'No I didn\'t'},
            ],
          });
      StoryNavSrv
        .editPage('1B1',
           {
            title: 'Left door',
            summary: 'First page',
            content: 'You totally did, liar!',
          });
      StoryNavSrv
        .editPage('1B2',
           {
            title: 'Left door',
            summary: 'First page',
            content: 'Stop contradicting!',
            choices: [
              {text: 'Herp'},
              {text: 'Derp'},
            ],
          });
    };

    //Initializer ***************************8
    StoryNavSrv.initializeStoryData = function(){
      //NOTE: For FE testing only
      seedTestDataBase();;
      StoryNavSrv.getUnfinishedPages();
    };

    return StoryNavSrv;
  }

  angular
    .module('fatebook')
    .factory('StoryNavSrv', [StoryNavSrv])
})();
