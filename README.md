# Fatebook

## Write, Play, Share
Fatebook is an interactive story sharing platform built using Angular and Rails. Users can **Play Through Stories** created by other users and **Create Stories** of their own. Authors can create their own choose-your-own adventure story using a simple interface, with visual guides to show which story threads remain unfinished.

### Play a Story
Click a story from the sidebar to play it. When playing, you will be presented with a box of text describing the scene, with a series of numeric options to choose from. Select the option you want by clicking or pressing the corresponding number key to advance down that story path. At any time you may hit Space to return to the first page.

### Create a Story
When you create a story, you must provide a Title and Description for other users to see. Afterward, the first page will be automatically generated for you. Input a Title and Body for the page, then select either ```Submit Draft``` to save an incomplete page for later or ```Submit Complete``` to confirm the page is finished.

### Creating Choices
Type in choice text you want the player to see into the text box then hit enter or click ```Create``` to create a new choice. A page corresponding to this option will be generated automatically, which you may then navigate to by clicking ```View Page``` next to the appropriate choice.

**NOTE:** Whenever you navigate away from a page, your changes are automatically saved to the database.

###      Navigating Your Story
If you are looking at a Story or Page Edit view, you will see a display at the bottom of the page showing the other pages within your story. At the top is a list of *Incomplete* pages that are created but not marked as complete. Additionally, you will see a *Tree View* of all pages, visually representing the story threads your readers can travel down. Click the name of any page in either list to go directly to its edit page.

### Resuming
At the top of the navbar you will see buttons to "Resume Play" or "Resume Edit". These will take you back to the last page of the story you were playing or editting respectively.
