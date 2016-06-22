story = Story.create!(
  {
    title: "Test Story",
    description:"Initial story to test Rails db",
    summary: "It's a long story",
    keywords: "testing arrays coolstuff",
    system: "default",
    rating: 10
  }
)

first_page = story.pages.create!(
  {
    title: "Initial page",
    summary: "First page",
    content: "You see two doors. Which do you choose?"
  }
)

p2 = first_page.branches.create!(
  {
    # TODO refactor to do choice text differently?
   choice_text: 'Open LEFT door',
   title: "Page2",
   summary: "Left Door",
   content: "Left door opened!"
  }
);

first_page.branches.create!(
  {
   choice_text: 'Open RIGHT door',
   title: "Page3",
   summary: "Right Door",
   content: "Right door opened!"
  }
);

first_page.branches.create!(
  {
   choice_text: 'Wat?',
   title: "Page3",
   summary: "blarg",
   content: "Oh lawd"
  }
);

p3 = p2.branches.create!(
  {
   choice_text: 'Scream real loud!',
   title: "Page4",
   summary: "blarg",
   content: "Really? Marvelous!"
  }
);

p2.branches.create!(
  {
   choice_text: 'Nah, dog!',
   title: "Page4",
   summary: "blarg",
   content: "Alrighty then!"
  }
);

p3.branches.create!(
  {
   choice_text: 'Scream real loud!',
   title: "Page4",
   summary: "blarg",
   content: "Is it really that marvelous?"
  }
);

p3.branches.create!(
  {
   choice_text: 'No!',
   title: "Page4",
   summary: "blarg",
   content: "That's daft wanker bollocks!"
  }
);
