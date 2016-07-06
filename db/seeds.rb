@user = User.create!(username:'admin',password:'password')

endings = 19

# story = Story.create!(
story = @user.stories.create!(
  {
    title: "Doors",
    description:"A surrealistic journey through a door",
  }
)
# TODO edit and revise pages
# TODO associate child pages with parent
def create_branch(child, parent_id)
  parent = Page.find(parent_id)

  branch = parent.branches.create!({
    destination_id: child[:id],
    choice_text: child[:text]
    })

  # story = Story.first
  story = @user.stories.first
  story.branches << branch
end



@start = story.pages.create!(
  {
    title: "Two Doors",
    content: "You are in a white room. It is the only room you have ever known.
    Quite a lonely existence you've had, eh? But wait! There two doors have
    just appeared before you. A blue door and a red door. Which one should you go through?"
  }
)

# TODO revise
@A = {
  text: 'The red door', id: story.pages.create!(
    {
      title: 'Through the red door...',
      content: "Through the red door is a long staircase made out of dry, tangled vines.
      It extends into a dark abyss that seems to have no end. After walking for a while
      you find a soda machine off to the side of it. There in it are three choices of drinks:
      Super Mega Awesome Soda, Lameass Soda, and Mystery Capitalist Adventure Soda. Which one do you chose?"
    }
    ).id
  }
create_branch(@A, @start[:id])

@A1 = {
  text: 'Super Mega Awesome Soda', id: story.pages.create!(
    {
      title: 'The Taste of Super Mega Awesome Soda',
      content: "The moment the delectable fluid touches your tongue you are overwhelmed
       with a magical flavor sensation that makes every nerve in your body radiate with blissful
        satisfaction. After savoring the flavor you open you eyes and you are staring down a hideous
         man-beast twice your size and thrice your width. He doesn't look too happy. What do you say?"
    }
    ).id
  }
create_branch(@A1, @A[:id])

@A1a = {
  text: 'Uh... hi?', id: story.pages.create!(
    {
      title: 'The Taste of Super Mega Awesome Soda',
      content: "The man-beast smiles graciously and gives you a warm hug. \n\“Brother!\”
      he says to you in a jolly voice, \“it has been so long since I have seen you!
      How have you been?\”\n How do you answer him?"
    }
    ).id
  }
create_branch(@A1a, @A1[:id])

@A1a1 = {
  text: 'Who the heck are you?', id: story.pages.create!(
  {
    title: 'The Taste of Super Mega Awesome Soda',
    content: "The man-beast looks at you angrily. Never has such an insult been levied
    toward his person in all the infinites he has existed. He challenges you to a battle
    to the death, wielding an Ax the size of a mountain against your Magnum Revolver
    that fires smoldering endangered species. The two of you fight an epic battle,
    decimating the whole of existence in your wake. In the end, you lift you gun
    above you head and smile as you have vanquished your foe. The candy that sprouts forth from his
    decaying innards pleases you for a lifetime and you live happily ever after.\n\n THE END 1/#{endings}"
  }
  ).id
}
create_branch(@A1a1, @A1a[:id])

@A1a2 = {
  text: 'Not bad, though I have had some troubling thoughts of late...', id: story.pages.create!(
  {
    title: 'Kindred Spirits',
    content: "The two of you talk over your sorrows over tea and bacon. Over time you come to unravel the
    very meaning of existence and become attuned to the very nature of the universe. The two of you
    decide to co-write a novel together that sells millions of copies, scoring you millions. You start a self-
    help business for people and bring peace to the world. Unfortunately, once everyone became
    enlightened, godlike beings of infinite wisdom, you were out of a job, and your fortune slowly
    vanished to nothing. You fail at life.\n\n THE END 2/#{endings}."
  }
  ).id
}
create_branch(@A1a2, @A1a[:id])

@A1a3 = {
  text: 'Meh.', id: story.pages.create!(
  {
    title: 'Passing Time',
    content: "“Well fine, don't be descriptive!” yelled the man-beast, promptly storming off into oblivion
    thereafter.\n Now look what you did, you jerk! You just had to say something like that, didn't you? My god,
    do you have any manners at all, man? What sort of inhuman abomination of Hades hath spawned
    such a malicious and abhorrent creature as you.\n
    I'm sorry, that kind of crossed the line. I didn't mean it that way. We're still friends, right? Oh,
    that guy? Don't worry about him. I'm sure he'll get over it after a while. In the meantime lets go play
    some chess until he gets back.\n
    But he never did come back, and we played chess until our very fingers crumbled to dust after
    countless millennia of gaming.\n
    I'm sorry? Oh, yeah, I talk in the future tense sometimes. Hurry up, its your move...\n\nTHE END 3/#{endings}"
  }
  ).id
}
create_branch(@A1a3, @A1a[:id])


@A1b = {
  text: 'Punch him in the face your your Deathclaw of Infinite Discomfort', id: story.pages.create!(
    {
      title: "Don't Mess with the Claw...",
      content: "With a thunderous crack you connect with your blow right at the man-beast's chest. With a
      howl he falls to the ground, falling through the ground beneath him. The hole quickly causes the
      ground beneath you to crack and you fall into the hole as well. After falling for a great distance, you
      land on the man-beast's stomach and roll off.\n
      The man-beast gets up and looks at you, then starts furiously scratching all over his body.\n
      \“So you are the one,\” he said, grunting and moaning at his discomfort, which, in this case, will
      be quite infinite. \“My ancestors told of one who would come here to lay the smackdown on me. I am
      humbled to be in the presence of such a mighty warrior.\”"
    }
    ).id
}
create_branch(@A1b, @A1[:id])

# TODO revise
@A1b1 = {
  text: 'Ah, well, it was nothing really...', id: story.pages.create!(
    {
      title: "The Hubris of Humility",
      content: "\“Aw, come on, don't be so modest,\” said the man-beast. You insist on retaining your
      humble facade, even though deep down you really are a narcissistic prick, and let the man-beast
       shower you with complements. It is only after the twelve hundredth day of his constant praise
        that you realize that the curse of your Deathclaw is not upon its victims, but it's wearer! Oh, snap, son!
        \n\nTHE END 4/#{endings}"
    }
    ).id
  }
create_branch(@A1b1, @A1b[:id])

# TODO revise
@A1b2 = {
  text: "Yeah, I am pretty awesome, aren't I?", id: story.pages.create!(
  {
    title: "Don't Mess with the Claw...",
    content: "Oh give me a break. Seriously? Cut it out on the macho thing man, its annoying.\n
    \“Hey, who the heck are you?\”\n
    Who me? Oh no one... no one at all.\n
    \“No, I've seen you before. You're that jerk that wrecked my car last summer.\”\n
    Oh... no... no that couldn't be me. You must be thinking of someone else.\n
    \“No, I'm quite sure it was you. Pay up, sucka!\”\n
    You know, I just happened to leave my wallet in the last story branch. Tell you what, I'll write
    you a raincheck-\n
    \“Hell no, you're going to pay up now!\”\n
    Hey uh... you wouldn't mind spotting me a few bucks right now, don't you buddy?\n
    \“Don't pull him into this, that's my brother you're talking to!\”\n
    Yeah... well... I don't have any money so... seeya!\n
    \“Hey, let's go catch that fool!\”\n
    Ha, the joke's on you! You see I'm the narrator so I don't actually have a physical presence-\n
    \“Gotcha.\”\n
    Aw crap...
    \n\nTHE END 5/#{endings}"
  }
  ).id
}
create_branch(@A1b2, @A1b[:id])

# TODO revise
@A2 = {
  # text: "Lameass Soda", id: story.pages.create!(
  text: "Phantom Mehnace", id: story.pages.create!(
  {
    title: "Buyer's Remorse",
    content: "You try out the Lameass soda and... oh wow, is that a butterfly! Oh, sorry. Yeah, so you try the
    soda, and it doesn't taste to great. You're pretty pissed off that you got ripped off by a stupid soda
    machine. What are you going to do about it?"
  }
  ).id
}
create_branch(@A2, @A[:id])

@A2a = {
  text: "Break the damn machine and get my money back.", id: story.pages.create!(
  {
    title: "A Twist of Fate",
    content: "You go to town on the machine, raining down upon it with a seemingly endless flurry of blows,
    decimating the machine beyond recognition. You reclaim your money and then some, but just as you
    go to walk away, you hear something climb out of the machine. Swiftly turning around you see a
    robot with chainsaws for arms, shotguns for legs, and machine guns for eyes walk up to you, it's
    grenade teeth chattering maniacally."
  }
  ).id
}
create_branch(@A2a, @A2[:id])

@A2a1 = {
  text: "Beat that robot fool up!", id: story.pages.create!(
  {
    title: "Fists of Vengeance",
    content: "Hahahahahah, no. Just... no. Yeah, that doesn't happen, he totally kicks your ass. I'll spare you
    the embarrassing details, but lets just say your going to live to regret bringing your cellphone to a
    fight with a robot...\n\nTHE END 6/#{endings}"
  }
  ).id
}
create_branch(@A2a1, @A2a[:id])

@A2a2 = {
  text: "Ignore him", id: story.pages.create!(
  {
    title: "Ignorance is Bliss",
    content: "Good, because I was just kidding about that last part. This hot stripper actually comes
    out instead. But she's considering a career change. You direct her to a few contacts you have
    in the smelting industry and she goes on her way. Upon further reflection you find it odd that she
    did not have a face and had giant clenched fists for breasts under her bikini top...\n\nTHE END 8/#{endings}"
  }
  ).id
}
create_branch(@A2a2, @A2a[:id])

@A2b = {
  text: "Indignantly retreat back home and write poetry about it..", id: story.pages.create!(
  {
    title: "The Solace of Poetry",
    content: "You storm home and lock yourself in your room. Which is kind of weird, since you have neither
    a room, door or lock. But let's not trouble ourselves with details. You start writing poetry until you
    realize how much of a tremendous bitch you are, and you become inspired to man-up and become a torchbearer
    atop Olympus. You fill out your application but they don't call back right away. You know how it is,
    a lot of applications come in at that place, especially at this time of year. So... yeah. You wait around
    for a bit and then they finally call you back. You manage to get an interview on Monday. Nice! Well, Monday
    rolls around and, as it turns out, the gods of mount Olympus have all been slaughtered by the evil Sorceress
    Alyktria the Obnoxious. As she drank the blood of the damned from the decapitated scull of Zeus, she explained
    to you how they don't offer dental benefits. You decide to reconsider your career options...\n\nTHE END 7/#{endings}"
  }
  ).id
}
create_branch(@A2b, @A2[:id])

@A3 = {
  text: "Mystery Capitalist Adventure Soda", id: story.pages.create!(
  {
    title: "Winging It",
    content: "The drink isn't that bad. In fact, it's pretty awesome. You carry it along
    and sip it as you skip merrily down the staircase. You feel a little funny though...
    Oh geez, are those wings?"
  }
  ).id
}
create_branch(@A3, @A[:id])

@A3a = {
  text: "Yep", id: story.pages.create!(
  {
    title: "Winging It",
    content: "You're damn right those are wings! You start to soar into the air,
    high above the staircase, until you penetrate the dark veil of oblivion and come
    across a mysterious forest of a thousand colors and shades. It is the bastion of
    all nature and the wellspring from which all life comes from. What will you do
    with this magnificent forest?"
  }
  ).id
}
create_branch(@A3a, @A3[:id])

# TODO revise
@A3a1 = {
  text: "Burn it to the ground.", id: story.pages.create!(
  {
    title: "Destruction!",
    content: "From the firey pit of your soul you hurl a fireball at the forest and in an instant the entire forest
    is ablaze. Creatures flock from every direction to flee from your pyromaniacal antics. You laugh
    fanatically as you watch the carnage you have wrought unfold. Deep in your soul you feel the most
    beautiful feeling of bliss watching all that is beautiful suffer and die by your deeds. This is the kind of
    thing you live for. It is your proudest accomplishment and legacy to all humanity. With a tear and a
    sigh, you fly into the horizon, hoping that someday, just some day, you'll be able to find something
    else that people cherish and adore and destroy it.\n\nTHE END 10/#{endings}" } ).id }
create_branch(@A3a1, @A3a[:id])

@A3a2 = {
  text: "What kind of wings are we talking here? Bird wings? Fairy wings? Bat wings?", id: story.pages.create!(
  {
    title: "Wing Things",
    content: "Funny you should ask. I actually saw those same ones in a magazine once. Pretty sweet deal.
    Didn't care so much for the coffee machine attachment but hey, what can you do?\n
    I bet you could get some great millage out of those babies. You just want to make sure they
    are well lubricated and you don't turn left on Thursdays. Really common mistake, believe me. I used
    to work up the labs that built these things back in college. Had to, um... do a few things I'm not too
    proud of to get the job but, you know, I needed the money. Heh... yeah, let's change the subject...\n
    Oh, you wanted a climax to this plot arc? You die, the end.\n\nTHE END 11/#{endings}" } ).id
}
create_branch(@A3a2, @A3a[:id])

# TODO revise
@A3b = {
  text: "Nope", id: story.pages.create!(
  {
    title: "Wing Things",
    content: "Ah, okay, must just be the medication acting up. Oh snap, dude! What's that?" } ).id
}
create_branch(@A3b, @A3[:id])

@A3b1 = {
  text: "What!? Where!?", id: story.pages.create!(
  {
    title: "The Nameless Horror",
    content: "In ten thousand years, no man, woman, child, or Republican has ever seen such a horrid
    abomination as the one that stands before you now. With ten thousand wings, a billion tongues, and
    4 hands all giving you the finger, this beast the size of the sun now glares upon you. As you gasp at
    the sight of the behemoth a sudden radiance beginning to emanate from the core of your being. A
    radiance that shines through darkness. Raising your hand high above you, you lunge it deep into your
    chest, and pull out a spear made of hope and a dash of raisins. Shining golden and bright, you flourish
    it before the creature as you prepare for your strike.\n
    Soaring toward the beast, you duck and weave passed the flurry of tendril-like toungues that
    lash out at you, slashing and hacking your way through them. After soaring for what seemed like days
    toward the beast, you finally lunge your mighty spear through its heart. But rather than your spear
    striking and digging into the beast, you fly into it, into a vast cavern that sucks you down.
    When you come out the other end, you are in a paradise. A beautiful tropical island of endless
    peace and serenity. You bathe your blade in the cool waters, watching the dark tendrils of the beasts
    blood flow down the river and over the nearby waterfall.\n
    You are a hero, a legend, a god. But no one shall ever hear of your story. You fail.\n\nTHE END 12/#{endings}" } ).id }
create_branch(@A3b1, @A3b[:id])

# TODO revise
@A3b2 = {
  text: "My arch nemesis...", id: story.pages.create!(
  {
    title: "The Nemesis",
    content: "Yeah, that's the guy alright. I bet your gonna go kick his ass, right? Go get 'em!\n
    Yeah, that's it, go for the upper cut. Yeah! Good one. Oooh, that's gotta hurt. Yeah, yeah
    give him a good shot to the groin. Ah! That is just brutal. I think he's learned his lesson you can... no
    no no, I don't think that's necessary. No, put that thing down, he doesn't need you... you did it, didn't
    you. Oh god... well, he isn't going to be sitting too still in jail now that's for sure...\n
    YOU HAVE DEFEATED YOUR ARCH NEMESIS. YOU GET:\n\n
    +2 BADASS POINTS\n
    -2 DIGNITY\n\nTHE END 13/#{endings}" }
    ).id
  }
create_branch(@A3b2, @A3b[:id])

@B = {
  text: 'The blue door', id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "The blue door takes you to a reception area of some kind, with a bespectacled
      woman of her middle ages behind a desk stamping envelopes. You notice that the emblem
      she has stamped onto the papers glows like a shimmering whirlpool and is the most beautiful
      thing you have ever seen. What do you do?"
    }).id
  }
create_branch(@B, @start[:id])

@B1 = {
  text: 'Ask the woman about the emblem.', id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "The woman looks up at you, then in an irritated tone tells you that it is the sacred emblem of
      Agor-Norath the Mightily Disquieted, and that the forms she was stamping were music requests for
      his late-night radio show. How do you respond to this?" }).id
  }
create_branch(@B1, @B[:id])

# TODO revise
@B1a = {
  text: 'Marry me, you magnificent goddess of womanhood!', id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Flattered by your offer, the woman heartily agrees. The two of you get married atop a shining
      ivory tower overlooking a vast a beautiful ocean of happiness and rapture. You win at life. \n\nTHE END 13/#{endings}" }).id
      # your song makes the heavens weep...
  }
create_branch(@B1a, @B1[:id])

@B1b = {
  text: 'That is fascinating, tell me more!', id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "The woman tells you an epic tale of love, war, deception, and liberation. It was a tale so grand
      and magnificent, that you very mind struggles to comprehend it. Like a great sea of information it
      floods into your mind, through your ears, coursing through your very veins, with it's mighty rapids
      causing your joints to tremble. No sooner had she started to talk Agor-Norath's eccentric pharmacist
      cousin, fred, that dark blue ink began to spew out from your ears, nose, mouth, and eyes. What do
      you do?" }).id
  }
create_branch(@B1b, @B1[:id])

@B1b1 = {
  text: "Eh, I'll walk it off. I have a good health plan.", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Indeed you do. Clever you for getting coverage for this very thing. After a few days in the
      hospital you are in the best shape of your life. After all that useless information is drained from your
      system, you decide to compete at a triathlon. You finish third out of thirty eight, which isn't too bad.
      At least you beat that loser Jeff. God, what an asshole. Can you believe what that guy did to his best
      friend's car last week? Unbelievable.\n
      God, here I go again. This happens whenever I start taking about him. Here, can you hold
      this? No, make sure the end is pointing up. Alright, good, that should be fine. Just let that air out a
      bit and I should be good.\n
      Huh? Oh no, I'll be fine without that. I have a spare back at home. Two of them, actually.
      One's a little nicer but, you know, this one gets me by.\n
      Whew, alright, thanks, I feel so much better. What were we talking about again?\n
      Hey, where are you going! \n\nTHE END 14/#{endings}" }).id }
create_branch(@B1b1, @B1b[:id])

@B1b2 = {
  text: "Oh dear Christ and all that is tastefully accessorized, someone get me a doctor!", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Fine, fine, quit your whining! The woman calls the doctor and he comes and puts corks into
      every orifice of your body. With no where to go, the ink starts inflating you like a balloon,
      transforming your insides into a torrent sea of narrative and endless exposition. The haunting sound
      of the woman's droning voice can be heard over the thunderous roars of the dark clouds above, while
      the two lobes of your brain cling for dear life from a piece of debris.\n
      Realizing that this may be their final moments of life, they confess their love for one another,
      and hold each other in a romantic embrace. For days they struggled to fish for nutritious facts or a
      particularly fiber-rich fact or two, but to no avail.\n
      When it seemed that all hope was lost, the clouds cleared, and a wondrous sun stretched out
      its rays through the blankets of fog. A mighty ship, appeared on the horizon, with its mightily bearded
      Captain waving and ensuring them that they would receive aid. And receive it they did.\n
      The two lobes of your brain returned to the mainland, where they vowed to never set sail at
      sea again. They settled down in a nice town just outside of the metropolis of St. Badass, married, and
      had a wonderful life together. Later they would recall their harrowing tale in their memoirs, which
      became one of the most influential works for Grand Emperor Filbert the Less than Adequate, who
      became king of the universe but a short four score years thereafter. \n\nTHE END 15/#{endings}"
     }).id
   }
create_branch(@B1b2, @B1b[:id])

@B1c = {
  text: "That is the most boring thing I have ever heard. You are boring, and you are a failure at
      everything you do.", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "The woman stood agasp at the revelation. Pondering your words she began to contemplate the
      error of her ways, and at once began to write up her letter of resignation. She never felt happier in
      her life, and felt liberated enough to finally peruse her lifelong dream of domesticating sand.
      She lived a satisfying life, publishing many books and getting sand pets into every home in the
      world. She won numerous prizes for her humanitarian efforts to prevent cruelty against sand,
      alongside the greatest saints and heroes of her generation.\n
      You, on the other hand, could never hope to have such a destiny. In the countless years in
      which you followed in her footsteps, she always overshadowed you. Her books would always upstage
      your grant lectures on the economic philosophies of schoolyard gravel, or your thesis on the paradox
      of Northern Welsh sandbars.\n
      No, all you could do was look fondly upon your idol, and hope that one day some sliver of her
      greatness would fall to you.. \n\nTHE END 16/#{endings}" }).id
   }
create_branch(@B1c, @B1[:id])

@B2 = {
    text: "Creepily stare at the woman until she notices you.", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "You stare at the woman while she works, getting lost in her eyes. A black desert of nothingness
      spreads out before you, with only the mighty arcs of her glasses decorating the heavens. You walk
      onward, determined to find something that would get her attention.
      You come upon a mighty obelisk at what seems to be the middle of the grand expanse. What
      do you do with it?"
    }).id
  }
create_branch(@B2, @B[:id])

@B2a = {
    text: "Pull it up out of the ground.", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "With some effort you pull the mighty structure out of the ground, revealing an enormous sword.
      Inscribed upon it is the names of every man to have ever carried a sword in all of history, written in a
      thousand languages, all glowing with a harmonious yellow light. You realize the moment you look at
      it what your destiny is.\n
      You grasp the mighty weapon in your right hand and sunder the earth beneath you. The world
      splits open, revealing a dark and shadowy cuddlefish at its greatest depths. The beast fires a burst of
      lava at your face, but you deftly deflect it. Training your blade on its target, you thrust the mighty
      blade into the heart of the beast, slaying it instantly.\n
      As you stand atop the head of your slain foe, the woman from the desk walks up to you,
      handing you a card. It is a lifetime pass to Nonstop Party Land. Awesome. \n\nTHE END 16/#{endings}"
    }).id
  }
create_branch(@B2a, @B2[:id])

@B2b = {
    text: "Press the button on its side labeled \“Do not push\”", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "The obelisk opens to reveal a slot machine. What do you do with it?"
    }).id
  }
create_branch(@B2b, @B2[:id])

@B2b1 = {
    text: "Play them slots, son!", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "You play the slot machine, and you find you are a master of it. No other man has come close to
      becoming such an expert at this skill than you. After winning a fortune at playing, you found a
      monastery atop the highest mountain in Asgard and teach others you fantastic gambling skills. You
      teach people of the merits of throwing their life savings away at a game of chance, and in doing so
      create a breed of gamblers that no Casino could crush.\n
      In the mighty Casino Wars of 2143, the Casino Empire fell to the superior skill of the gamblers,
      and a thousand years of peace rained upon the land.\n\nTHE END 18/#{endings}"
    }).id
  }
create_branch(@B2b1, @B2b[:id])

# TODO revise
@B2b2 = {
    text: "Damn, I'm broke!", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Yeah you are! Have fun living in that box, loser!\n
      Nah, just kidding. You find a couple of bucks in your back pocket and play a few rounds. Once you get
      bored you head back to the receptionist and steal her face. You paint it with clown pain and start
      creating balloon animals. In time you create a whole world of balloon animals, which in turn begot
      their own civilization. In time, they forgot about their benevolent creator, and when you came to
      confront them, they gave a half hearted \“Uh... thanks for making us?\” and returned to their daily
      lives. Jerks.\n\nTHE END 17/#{endings}"
    }).id
  }
create_branch(@B2b2, @B2b[:id])

# TODO revise
@B3 = {
    text: "Summon a cranberry pie from the Ninth layer of hell.", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "You call upon the demons of hell to conjure forth the most wicked and foul of all cranberry pies
      from the Stygian pits of Eternal Suffering, and boy is it delicious! Hey, want some? Great, looks like
      the receptionist is going to be joining this.\n
      Be cool, okay? I don't want you embarrassing me in front of her. She's pretty hot. You're cool
      if I hit on her while we eat, right?"
    }).id
  }
create_branch(@B3, @B[:id])

@B3a = {
    text: "Hey lady, this guy thinks you're fat!", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Apparently ol' Beelzebub doesn't take kindly to people insulting his most favored acolyte. The
      woman's flesh pulls back from her face, revealing a scull with flaming eyes. Her eyes start shooting
      razor sharp blades of sugar at you. You deftly deflect it with the pie, then hurl the pie like a discus
      into her gaping maw. The demon succumbs to the deliciousness and vanishes in a puff of smoke.\n
      But all of that is besides the point, that was a damn good pie man! Why'd you have to go and
      throw it away like that! Way to be a dick, asshole!\n\nTHE END 19/#{endings}"
    }).id
  }
create_branch(@B3a, @B3[:id])

@B3b = {
    text: "I got your back, bro.", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Thanks, bro. Oh hey, baby. How's it going? Nice, nice, those must be some really important
      forms you got there, eh? Hey listen, if you wanted maybe later we could- what? You're on the clock?
      Nah, I'm sure your boss won't mind.\n
      Woah, who's that angry guy storming this way. Haha, look at that toupee! Oh, he's your boss?
      Oh damn... uh, hello sir. We were just enjoying a nice meal with... hey, put me down! Oh god, don't
      hurt me. Quick, do something!"
    }).id
  }
create_branch(@B3b, @B3[:id])

# TODO revise
@B3b1 = {
    text: "Fear not, I will handle this villain!", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "Like Hercules himself, you rip off your shirt to reveal a chest of mighty muscle and with a single
      blow from your fist you take the boss's face off and cause him to fly toward the horizon.
      That was awesome! Oh... yeah, I bet you find that hot there... uh, you know I can do stuff like
      that too. I was just giving the kid a chance... heh. (God I hate you so much.)\n\nTHE END 18/#{endings}"
    }).id
  }
create_branch(@B3b1, @B3b[:id])

@B3b2 = {
    text: "Mmm pie...", id: story.pages.create!(
    {
      title: 'Through the blue door...',
      content: "What! What are you doing! Help me! Ow! Come on, the pie isn't that great. Argh! Will you
      stop punching me for like 2 seconds, man. Ow! Let me tell you som- black! Okay, that loosened a
      tooth there. You'll be hearing from my insurance- ow! My ribs, that sound can't be good. Puh! Okay,
      that's my lung over there, if you could just pick it up that would be – blaugh! Okay, seriously that's
      enough. Ugh! Oh god my head... at least he'd done fooling around now. The nerve of that guy. Give
      me that damn pie! Oh, wow, this goes great with the blood in my mouth. Mmmmm...\n\nTHE END 19/#{endings}"
    }).id
  }
create_branch(@B3b2, @B3b[:id])

story.pages.each do |page|
  page.update(complete: true)
end

p 'Story created'
p "#{story.pages.length} pages created with #{endings} endings"
