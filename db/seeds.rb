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
   title: "Page2",
   summary: "Left Door",
   content: "Left door opened!"
  }
);

first_page.branches.create!(
  {
   title: "Page3",
   summary: "Right Door",
   content: "Right door opened!"
  }
);

p2.branches.create!(
  {
   title: "Page4",
   summary: "blarg",
   content: "Really? Marvelous!"
  }
);
