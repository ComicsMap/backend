import { Em, makeIssue } from '@commands/seed/helpers';
import { Series } from '@commands/seed/series';

export const seedIssues = (em: Em, series: Series) => {
  const i = makeIssue(em);
  return {
    armageddonCGD2026: i({
      title: 'Avengers Armageddon/X-Men CGD 2026 #1',
      synopsis:
        "The heroes of the Marvel Universe assemble to take on the Red Hulk in a critical story by Chip Zdarsky that sets the stage for this summer's Marvel event…ARMAGEDDON! Armageddon is here, and no one is safe from the coming end. PLUS: Your first look at this summer's big X-MEN event…and DOOM!",
      publishedAt: new Date('2026-05-02'),
      series: series.avengersArmageddonCGD,
      issueNumber: '1',
    }),

    amazingSpiderManFCBD2025: i({
      title: 'The Amazing Spider-Man/Ultimate Universe FCBD 2025 #1',
      synopsis:
        "Joe Kelly and John Romita Jr. remind us who Peter Parker and SPIDER-MAN are! Plus, an exclusive prologue to this summer's blockbuster ULTIMATE event from Deniz Camp, Cody Ziglar & Jonas Scharf!",
      publishedAt: new Date('2025-05-03'),
      series: series.amazingSpiderManUltimateFCBD,
      issueNumber: '1',
    }),

    shield1: i({
      title: 'S.H.I.E.L.D. #1',
      synopsis:
        "The most acclaimed book of 2010 is back in 2011! The second volume of S.H.I.E.L.D. has arrived and Jonathan Hickman (FANTASTIC FOUR) and Dustin Weaver (X-MEN) are making the second volume of S.H.I.E.L.D. even better than the first! In this issue, the secret history of Michelangelo. He has been pulling the strings for years and is now becoming the prime mover. Can he keep Da Vinci and Newton from killing each other and destroying the Brotherhood of the Shield? Don't miss this new start of the book that everyone is talking about!",
      publishedAt: new Date('2011-06-01'),
      series: series.shield2011,
      issueNumber: '1',
    }),
    shield2: i({
      title: 'S.H.I.E.L.D. #2',
      synopsis:
        'The battle between Leonardo Da Vinci and Issac Newton for the Immortal City comes to a climactic conclusion! Leonid makes his choice between his two fathers, Michelangelo and Tesla kick their plan into high gear and Howard Stark lays the foundation for the organization you know as S.H.I.E.L.D.',
      publishedAt: new Date('2011-08-03'),
      series: series.shield2011,
      issueNumber: '2',
    }),

    kingInBlack1: i({
      title: 'King in Black #1',
      synopsis:
        "DARKNESS REIGNS! After a campaign across the galaxy, Knull's death march arrives to Earth and, worse yet, he hasn't come alone! With an army of hundreds of thousands of symbiote dragons at his command, the King in Black is a force unlike any Earth's heroes have ever faced. EDDIE BROCK, A.K.A. VENOM has seen firsthand the chaos that even one of Knull's symbiotic monsters can wreak - will he survive an encounter with the God of the Abyss himself? From Donny Cates, Ryan Stegman, JP Mayer, Frank Martin and VC's Clayton Cowles comes the definitive chapter in their two-year-long VENOM saga that changed everything you thought you knew about symbiotes!",
      publishedAt: new Date('2020-12-02'),
      series: series.kingInBlack,
      issueNumber: '1',
    }),

    allNewVenom1: i({
      title: 'All-New Venom #1',
      synopsis:
        "WHO IS THE ALL-NEW VENOM? The smiling, swashbuckling spider-hero New York loves to hate to love is back - and more fun-loving than ever! That's right, it's... Wait, it's VENOM?! An all-new host is taking the symbiote in a whole new direction - but who? It could be the Journalist...the Terrorist...the Sidekick... or even the Mayor... We're giving you all the clues, good believers - but you won't know until the mask comes off! Writer Al Ewing (VENOM, IMMORTAL THOR) takes Venom in a completely new direction with artist Carlos Gómez (FANTASTIC FOUR, THE AMAZING MARY JANE) bringing the story to gorgeous life!",
      publishedAt: new Date('2024-12-04'),
      series: series.allNewVenom,
      issueNumber: '1',
    }),
    allNewVenom2: i({
      title: 'All-New Venom #2',
      synopsis:
        "A.I.M. AND FIRE! A.I.M. are on the hunt for the All-New Venom - and they're not alone! Who are.. the SYMBIOTE SQUAD? Meanwhile, Dylan Brock's search for the new Venom host puts him on a collision course with the deadly Madame Masque! And the mystery deepens as one suspect is eliminated... with extreme prejudice!",
      publishedAt: new Date('2025-01-08'),
      series: series.allNewVenom,
      issueNumber: '2',
    }),
    allNewVenom3: i({
      title: 'All-New Venom #3',
      synopsis:
        'HERE COMES THE SON! At last - the All-New Venom comes face-to-face with Dylan Brock! After all this time, how will symbiote and son react? Meanwhile, Madame Masque is making her move against A.I.M. - but is she doing it from inside a black-and-gold symbiote? As another suspect is eliminated, the answers are closer than ever...',
      publishedAt: new Date('2025-02-12'),
      series: series.allNewVenom,
      issueNumber: '3',
    }),
    allNewVenom4: i({
      title: 'All-New Venom #4',
      synopsis:
        "M.O.D.O.K. MADNESS! M.O.D.O.K. gets inside the All-New Venom's head...and you won't believe how! But whose side is Madame Masque on? One thing's for sure - by the time you finish this issue, you'll be one step closer to knowing who's under the goo...Meanwhile, take a visit to S.C.A.R. HQ --and find out what happened to Flash Thompson, Agent Anti-Venom!",
      publishedAt: new Date('2025-03-12'),
      series: series.allNewVenom,
      issueNumber: '4',
    }),
    allNewVenom5: i({
      title: 'All-New Venom #5',
      synopsis:
        "WHO IS THE ALL-NEW VENOM…REVEALED?! When all the red herrings have been weeded out - who's left? The clues have been in front of you the whole time - and by the end of this issue, you WILL know the name of the ALL-NEW VENOM...but with M.O.D.O.K. out for symbiote blood, you might just be identifying the corpse!",
      publishedAt: new Date('2025-04-02'),
      series: series.allNewVenom,
      issueNumber: '5',
    }),
    allNewVenom6: i({
      title: 'All-New Venom #6',
      synopsis:
        "THE ORIGIN OF THE ALL-NEW VENOM! Now we know WHO the All-New Venom is...the question is HOW? What happened after the events of the Venom War? Why did the symbiote choose this host - and why can't they separate? Jackpot confronts Venom - and she may not like what she finds out!",
      publishedAt: new Date('2025-05-07'),
      series: series.allNewVenom,
      issueNumber: '6',
    }),
    allNewVenom7: i({
      title: 'All-New Venom #7',
      synopsis:
        "VENOM VS. ANTI-VENOM! If Flash Thompson doesn't take down the new Venom, his superiors will make sure it's Dylan Brock who pays the price. But now that Flash knows who the new Venom is, can he pull the trigger on the human being underneath? And if he can't...which sinister Spider-villain is waiting in the wings to do it for him?",
      publishedAt: new Date('2025-06-04'),
      series: series.allNewVenom,
      issueNumber: '7',
    }),
    allNewVenom8: i({
      title: 'All-New Venom #8',
      synopsis:
        "EIGHT-ISSUE TENTACULAR SPECTACULAR! As Venom battles the Symbiote Squad at the Daily Bugle, the Sleeper Agent attempts a daring jailbreak on North Brother Island...neither of them knowing that S.C.A.R. has a superior new ally in the war on symbiotes! Doctor Octopus is back - and he's more armed and dangerous than ever!",
      publishedAt: new Date('2025-07-02'),
      series: series.allNewVenom,
      issueNumber: '8',
    }),
    allNewVenom9: i({
      title: 'All-New Venom #9',
      synopsis:
        "BREAKUP AND BREAKOUT! It's Team Venom vs. Team Octopus - and the outcome might just decide the fate of Symbiotekind! But what's Doc Ock's real master plan? And why does he need the Sleeper Agent to do it? Meanwhile, Mary Jane's home life goes from bad to worse...as Dylan finally learns the truth!",
      publishedAt: new Date('2025-08-06'),
      series: series.allNewVenom,
      issueNumber: '9',
    }),
    allNewVenom10: i({
      title: 'All-New Venom #10',
      synopsis:
        "VENOM VS. MARY JANE WATSON! After the events of last issue, MJ's life is upside down… and there's one symbiote to blame! It's the argument of the century as the world's strangest roommates air all their dirty laundry…but when the last word is said, will any relationship be left standing?",
      publishedAt: new Date('2025-09-03'),
      series: series.allNewVenom,
      issueNumber: '10',
    }),

    venom250: i({
      title: 'Venom #250',
      synopsis:
        'THE RETURN OF KNULL!!! Mary Jane Watson is finally in the swing of things as the new Venom host, using their powers in all-new ways to be the hero the symbiote never knew it could be! But as she cleans up the streets of New York, she remains blissfully unaware of the strands of darkness leading off into the darkness of the void. Knull, the creator of all symbiotes, was killed by Eddie Brock. Nothing could bring him back... but Knull rules over nothing. Knull has returned, and word is racing across the stars to the one who took him down before to prepare to do it again. Will Venom be ready? Join us for a huge celebratory issue as ALL-NEW VENOM becomes VENOM once more and shifts back to the legacy numbering with issue #250!',
      publishedAt: new Date('2025-10-01'),
      series: series.venom2025,
      issueNumber: '250',
    }),
    venom251: i({
      title: 'Venom #251',
      synopsis:
        "BREAK THE STREAK! Doc Ock is back - as Director of Operations for S.C.A.R.! And he's got the all-new Toxin in his sights! Luke Cage isn't happy - but will New York's Mayor choose to side with human law...or symbiote justice? Plus - MJ gets a new gig! Venom gets a new look! And the rollicking return of Blue Streak!",
      publishedAt: new Date('2025-11-12'),
      series: series.venom2025,
      issueNumber: '251',
    }),
    venom252: i({
      title: 'Venom #252',
      synopsis:
        "THE RUMORS ARE TRUE! Venom has a brand-new red-and-blue suit - and a brand new name to go with it! How will the people of New York react when they find out that the city's newest Spider-Man is the SYMBIOTE they love to loathe? Luke Cage and Otto Octavius are ready to debate the matter - with their fists! PLUS: A bonus tale of the origin of an even All-NEWER Venom! AND a celebratory flashback story by the team behind the classic AMAZING SPIDER-MAN #252!",
      publishedAt: new Date('2025-12-03'),
      series: series.venom2025,
      issueNumber: '252',
    }),
    venom253: i({
      title: 'Venom #253',
      synopsis:
        "MASQUE MAKES HER MOVE! Madame Masque wants Venom out of her way - one way or the other. And somehow, she's found out who's under the goo. With all the power of A.I.M. in her golden glove, she's turning the screws on the world's strangest roommates...but will the goosome twosome squish under the pressure? Or is Madame Masque waking up the monster within?",
      publishedAt: new Date('2026-01-07'),
      series: series.venom2025,
      issueNumber: '253',
    }),
    venom254: i({
      title: 'Venom #254',
      synopsis:
        "WAR IN THE STREETS! Mary Jane Watson is piloting the Venom Symbiote, five hundred pounds of wisecracking alien goo monster. Whitney Frost is piloting the Madame Masque Battlesuit, two tons of A.I.M.-constructed, missile-loaded murder machine. How many beloved New York landmarks will perish in the wake of their fury? Let's count! One… two…",
      publishedAt: new Date('2026-02-11'),
      series: series.venom2025,
      issueNumber: '254',
    }),
    venom255: i({
      title: 'Venom #255',
      synopsis:
        "THE SECRET IS OUT! DEATH SPIRAL PART THREE! After the shocking events of AMAZING SPIDER-MAN #23, Spider-Man and the All-New Venom have some serious talking to do... But first they've got to solve the one murder neither of them - or their villains - ever expected to face! Meanwhile, EDDIE BROCK is back...with a CARNAGE-sized secret of his own, and a connection to the mystery you'll have to see to believe!",
      publishedAt: new Date('2026-03-11'),
      series: series.venom2025,
      issueNumber: '255',
    }),
    venom256: i({
      title: 'Venom #256',
      synopsis:
        "DEATH SPIRAL PART SIX! The serial killer Torment is following the path of the Death Spiral...and it's led straight to Dylan Brock! Now the son of Venom is alone, injured and on the run...and Venom's other child might be his only hope. But will Carnage choose to help Dylan...or kill him all over again? Because SOMEONE'S got to die...",
      publishedAt: new Date('2026-04-01'),
      series: series.venom2025,
      issueNumber: '256',
    }),
    venom257: i({
      title: 'Venom #257',
      synopsis:
        "DEATH SPIRAL PART EIGHT! Anna Watson and May Parker are caught in the Death Spiral, and their only hope is...Flash Thompson?! Will Spider-Man and Venom save the day, or will MJ and Peter's old wounds create a new tragedy? And where's Carnage in all this? Even when you find out - you STILL won't believe it!",
      publishedAt: new Date('2026-04-15'),
      series: series.venom2025,
      issueNumber: '257',
    }),
    venom258: i({
      title: 'Venom #258',
      synopsis:
        "THREE'S A CROWD! In the aftermath of Death Spiral, Mary Jane Watson and Peter Parker have a long overdue heart-to-heart...but when the masks go on, Venom and Spider-Man have some unfinished business! And one way or another, this is going to lead to a BIG change for Venom and MJ!",
      publishedAt: new Date('2026-05-20'),
      series: series.venom2025,
      issueNumber: '258',
    }),

    webOfVenom1: i({
      title: 'Web of Venom #1',
      synopsis:
        "THE EVEN ALL-ER, NEW-ER VENOM?! There is an even NEWER symbiote wearing hero on the scene sporting the red-and-blue Spidey inspired look on the streets of Earth 616...but it's not Mary Jane Watson, and it's not Eddie Parker! But it IS someone that Peter Parker knows well...someone both he AND Spider-Man have had many encounters with...someone looking to use this new web-slinging identity to make their much-deserved comeback! The saga of the new fan favorite Red-And-Blue alien costume takes a whole new turn, kicking a classic Spider character into a whole new direction that they have no intention of giving up!",
      publishedAt: new Date('2026-04-08'),
      series: series.webOfVenom2026,
      issueNumber: '1',
    }),

    theAmazingSpiderMan23: i({
      title: 'The Amazing Spider-Man #23',
      synopsis:
        "SHOCKED BY THE SINISTER SYMBIOTE! DEATH SPIRAL PART TWO! CARNAGE. KNOWS. Which means SPIDEY and VENOM team up again to stop the serial killer-symbiote. But instead of EDDIE BROCK, Peter uncovers another bombshell beneath Venom's mask - MARY JANE WATSON! And that's just the first SHOCKING REVELATION of this issue! Carnage isn't the only problem…Peter and MJ are going to have to patch things up if they want a fighting chance to stop new hyper-lethal villain, TORMENT's killing spree.",
      publishedAt: new Date('2026-03-04'),
      series: series.theAmazingSpiderMan2025,
      issueNumber: '23',
    }),
    theAmazingSpiderMan24: i({
      title: 'The Amazing Spider-Man #24',
      synopsis:
        "CARNAGE MEETS ITS MATCH!? DEATH SPIRAL PART FOUR! Carnage faces off against Torment while the serial killer's latest murder leaves the Spidey-Symbiote Alliance shaken.",
      publishedAt: new Date('2026-03-18'),
      series: series.theAmazingSpiderMan2025,
      issueNumber: '24',
    }),
    theAmazingSpiderMan25: i({
      title: 'The Amazing Spider-Man #25',
      synopsis:
        'UNRELENTING TORMENT… DEATH SPIRAL PART FIVE! …for Spider-Man, Venom and Carnage leads to the most unexpected team-up in Spidey History! But even if Spidey wins, he may still lose…because Torment learns not one, but two shocking truths about his foes!',
      publishedAt: new Date('2026-03-25'),
      series: series.theAmazingSpiderMan2025,
      issueNumber: '25',
    }),
    theAmazingSpiderMan26: i({
      title: 'The Amazing Spider-Man #26',
      synopsis:
        "DEATH SPIRAL PART SEVEN! SPIDER-MAN is the LAST hero standing against TORMENT'S onslaught! MJ, Eddie and Dylan are in Torment's sights. Peter can't save them all! And Torment's newest ALLY just tipped the scales in the serial killer's favor!",
      publishedAt: new Date('2026-04-08'),
      series: series.theAmazingSpiderMan2025,
      issueNumber: '26',
    }),
    theAmazingSpiderMan27: i({
      title: 'The Amazing Spider-Man #27',
      synopsis:
        'DEATH SPIRAL - CONCLUSION! Torment will get away with murder. Unless SPIDER-MAN does the UNTHINKABLE…',
      publishedAt: new Date('2026-04-22'),
      series: series.theAmazingSpiderMan2025,
      issueNumber: '27',
    }),

    deathSpiral1: i({
      title: 'Amazing Spider-Man/Venom: Death Spiral #1',
      synopsis:
        "FIRST YOUR FRIENDS. THEN YOUR FAMILY. THEN YOU. The next epic SPIDER-MAN and VENOM crossover starts here and continues through April! A new super-powered serial killer is on the loose and they're coming for Spidey, Venom and everyone in between. But what terrible secret has CARNAGE learned, and what does it have to do with Spider-Man?!",
      publishedAt: new Date('2026-02-25'),
      series: series.deathSpiral2026,
      issueNumber: '1',
    }),

    ultimateUniverseTwoYearsIn: i({
      title: 'Ultimate Universe: Two Years In',
      synopsis:
        "ALL PATHS LEAD TO ENDGAME! In preparation for the Maker's return in ULTIMATE ENDGAME, the Ultimate Guardians have been traveling all across time and space, recruiting members new and old… Travel across all the corners of the Ultimate Universe! Don't miss the dawn of many new characters, including ULTIMATE DAREDEVIL!",
      publishedAt: new Date('2025-12-03'),
      series: series.ultimateUniverseTwoYearsIn,
      issueNumber: '1',
    }),

    ultimateEndgame1: i({
      title: 'Ultimate Endgame #1',
      synopsis:
        "ENDGAME HAS ARRIVED! The moment that has been building since the beginning of the new Ultimate Universe! Spinning out of Deniz Camp and Juan Frigeri's ULTIMATES comes the culmination of ULTIMATE INVASION… Two (thousand) years have passed in the Ultimate Universe, but inside the City, the Maker has had thousands of years to prepare for his return! With the barrier around the City finally gone, heroes all across the Ultimate Universe must mobilize to defeat the Maker before it's game over. For everyone. Meanwhile, the rest of the world wages World War III…",
      publishedAt: new Date('2025-12-31'),
      series: series.ultimateEndgame,
      issueNumber: '1',
    }),
    ultimateEndgame2: i({
      title: 'Ultimate Endgame #2',
      synopsis:
        "THE END HAS ONLY JUST BEGUN! The heroes of the Ultimate Universe - including Spider-Man, America Chavez, Killmonger and Doom - desperately search for a way to stop the Maker. Plus, Iron Lad makes a stunning and heartbreaking discovery that could change the fate of the entire Ultimate Universe forever. Don't miss this pivotal chapter that will leave you reeling!",
      publishedAt: new Date('2026-02-04'),
      series: series.ultimateEndgame,
      issueNumber: '2',
    }),
    ultimateEndgame3: i({
      title: 'Ultimate Endgame #3',
      synopsis:
        "THE END OF THE ULTIMATE UNIVERSE DRAWS NEAR! Inside the Maker's City, a desperate group of heroes battles the terrifying Children of Tomorrow and discover some surprising allies! While outside the City, the Ultimates and other heroes of the Ultimate Universe must deal with the unspeakable power that has just been unleashed! With shocking twists, painful deaths and massive reveals, this epic is heating up fast. Don't miss the ultimate super-hero event of the century!",
      publishedAt: new Date('2026-03-25'),
      series: series.ultimateEndgame,
      issueNumber: '3',
    }),
    ultimateEndgame4: i({
      title: 'Ultimate Endgame #4',
      synopsis:
        'SPIDER-MAN MEETS HIS MAKER! Time is ticking on the Ultimate Universe!!! In this penultimate issue of the most climactic super-hero event EVER(!)…heroes will fall, villains will rise and your favorite characters will be forced to make difficult sacrifices!',
      publishedAt: new Date('2026-05-13'),
      series: series.ultimateEndgame,
      issueNumber: '4',
    }),

    ultimateSpiderMan55: i({
      title: 'Ultimate Spider-Man #55',
      synopsis:
        'HOLLYWOOD PART 2 Spider-Man may have made it to Hollywood, but Doc Ock is right behind him! Prepare for an all-out showdown on the set of the unauthorized Spider-Man movie!',
      publishedAt: new Date('2004-03-24'),
      series: series.ultimateSpiderMan,
      issueNumber: '55',
    }),
    ultimateSpiderMan67: i({
      title: 'Ultimate Spider-Man #67',
      synopsis:
        "SUPERSTARS PART 2 Wolverine and Spider-Man have always been in each other's faces. Today they're in each other's bodies! It's Freaky Friday...",
      publishedAt: new Date('2004-09-20'),
      series: series.ultimateSpiderMan,
      issueNumber: '67',
    }),
    ultimateSpiderMan115: i({
      title: 'Ultimate Spider-Man #115',
      synopsis:
        "DEATH OF A GOBLIN PART 4 A team of federal agents are on Osborn's tail! And leading that team is none other than Spider-Man: Agent of S.H.I.E.L.D.! How did this happen and what does it all mean?",
      publishedAt: new Date('2007-09-24'),
      series: series.ultimateSpiderMan,
      issueNumber: '115',
    }),

    secretAvengers1: i({
      title: 'Secret Avengers #1',
      synopsis:
        "THE HEROIC AGE IS HERE! Who are the Secret Avengers? Are they a covert team of heroes working the darkest corners of the globe to stop disaster? Are they part-spy, part-superhero? Are they XXXXXXX's newest idea to save the world...or all they all of the above? A new era begins as Marvel's hottest team takes a 21st century twist!",
      publishedAt: new Date('2010-05-26'),
      series: series.secretAvengers,
      issueNumber: '1',
    }),
    secretAvengers2: i({
      title: 'Secret Avengers #2',
      synopsis:
        "The Secret Avengers strike force finds a link between Roxxon's digs on Mars and a mysterious shadow group on Earth. But what evil will they face on the Red Planet itself, and will a hero fall?",
      publishedAt: new Date('2010-06-30'),
      series: series.secretAvengers,
      issueNumber: '2',
    }),
    secretAvengers3: i({
      title: 'Secret Avengers #3',
      synopsis:
        'What hides in the depths of the red planet? How does it link to the Shadow Empire lurking behind the scenes in America for nearly 150 years? And will our heroes be able to save one of their own? The Secret Avengers duo Ed Brubaker and Mike Deodato bring the action.',
      publishedAt: new Date('2010-07-28'),
      series: series.secretAvengers,
      issueNumber: '3',
    }),
    secretAvengers4: i({
      title: 'Secret Avengers #4',
      synopsis:
        'The fate of one hero and the birth of another will be decided here, as the Secret Avengers true enemy is finally exposed!',
      publishedAt: new Date('2010-08-18'),
      series: series.secretAvengers,
      issueNumber: '4',
    }),
    secretAvengers5: i({
      title: 'Secret Avengers #5',
      synopsis:
        "A secret foe has been revealed - or has he? Find out everything you need to know about the OTHER Nick Fury as Secret Avengers continues to explore the volatile landscape of Marvel's new Heroic Age!",
      publishedAt: new Date('2010-09-22'),
      series: series.secretAvengers,
      issueNumber: '5',
    }),
    secretAvengers6: i({
      title: 'Secret Avengers #6',
      synopsis:
        "Everybody is Kung Fu fighting... as the Secret Avengers descend into the depths of Marvel's darkest corners on a new case that brings them face to face with a Master of Kung Fu and many forces of evil. Ed Brubaker and Mike Deodato bring you another twisted tale of Marvel's most popular new Avengers team.",
      publishedAt: new Date('2010-09-27'),
      series: series.secretAvengers,
      issueNumber: '6',
    }),
    secretAvengers7: i({
      title: 'Secret Avengers #7',
      synopsis:
        "Dark forces are at work in Hong Kong to reincarnate a great evil...but the Secret Avengers and that great evil's son -- SHANG CHI -- are also on these dark streets! As is a new secret member of Marvel's hottest covert Avengers team! By the all-star team-up of Ed Brubaker and Mike Deodato.",
      publishedAt: new Date('2010-10-24'),
      series: series.secretAvengers,
      issueNumber: '7',
    }),
    secretAvengers8: i({
      title: 'Secret Avengers #8',
      synopsis:
        "Marvel's newest hit Avengers team continues its breakneck pace! Steve Rogers comes face-to-face with an old comrade in arms from the war...who's now working for the Shadow Council! The Secret Avengers Hong Kong Kung Fu extravaganza continues!",
      publishedAt: new Date('2010-12-22'),
      series: series.secretAvengers,
      issueNumber: '8',
    }),
    secretAvengers9: i({
      title: 'Secret Avengers #9',
      synopsis:
        "Will Shang Chi's father return?! And now that their secret enemy's involvement in his resurrection has been exposed, what will Steve Rogers and his team do to take on the Shadow Council? Brubaker and Deodato keep up the Kung Fu Espionage.",
      publishedAt: new Date('2011-01-26'),
      series: series.secretAvengers,
      issueNumber: '9',
    }),
    secretAvengers10: i({
      title: 'Secret Avengers #10',
      synopsis:
        'The action-packed conclusion of our Secret Avengers second secret mission! Steve Rogers face-to-face with an old friend turned enemy! A Secret Avenger in the hands of the Shadow Council! This story may be over, but things are just heating up!',
      publishedAt: new Date('2011-02-23'),
      series: series.secretAvengers,
      issueNumber: '10',
    }),
    secretAvengers11: i({
      title: 'Secret Avengers #11',
      synopsis:
        'The secrets of John Steele and his link to the Shadow Council are revealed in a special two-part World War Two espionage adventure! Also starring Captain America and the Prince of Orphans, deep behind enemy lines!',
      publishedAt: new Date('2011-03-30'),
      series: series.secretAvengers,
      issueNumber: '11',
    }),
    secretAvengers12: i({
      title: 'Secret Avengers #12',
      synopsis:
        "Steve Rogers' old friend and fellow soldier John Steele is working with the Shadow Council against the Secret Avengers and against the world. What dark secret led to Steele's fall from grace? Can Steve Rogers learn the secret in time to save his friend and stop the Shadow Council? And if all else fails, can the Secret Avengers rise to the occasion and stop this covert menace?",
      publishedAt: new Date('2011-04-27'),
      series: series.secretAvengers,
      issueNumber: '12',
    }),
    'secretAvengers12.1': i({
      title: 'Secret Avengers #12.1',
      synopsis:
        "THE SECRET IS OUT! Word of Steve Rogers' clandestine operations has leaked to the world, kicking off a global race by the Secret Avengers to save compromised superhuman assets before they can be taken off the board! Behind it all: a mystery man in familiar garb, who'll force the Super-Soldier to confront some very hard realities about his new role as a general.",
      publishedAt: new Date('2011-05-01'),
      series: series.secretAvengers,
      issueNumber: '12.1',
    }),
    secretAvengers13: i({
      title: 'Secret Avengers #13',
      synopsis:
        "FEAR ITSELF TIE-IN! Armies are mounting against the Avengers on every side, and even the Gods have turned their backs on Earth. With humanity facing it's gravest threat yet, Steve Rogers and his Secret Avengers will make some hard choices about what's just in times of war. And even as they do, a new danger of a different kind emerges-- one that confronts them not in the name of evil or fear, but freedom and liberty.",
      publishedAt: new Date('2011-05-25'),
      series: series.secretAvengers,
      issueNumber: '13',
    }),
    secretAvengers14: i({
      title: 'Secret Avengers #14',
      synopsis:
        "FEAR ITSELF TIE-IN! She is Brunhilde of Asgard, The Valkyrie--once charged by Odin himself with carrying mankind's bravest souls to their resting place in Valhalla. But when the Norse Gods take up arms against humanity, she must choose which side to fight for--and with war raging all around her, the fate of Midgard may be hers to decide!",
      publishedAt: new Date('2011-06-22'),
      series: series.secretAvengers,
      issueNumber: '14',
    }),
    secretAvengers15: i({
      title: 'Secret Avengers #15',
      synopsis:
        'FEAR ITSELF TIE-IN! With her world falling apart around her and the Avengers in disarray, Black Widow undertakes the most dangerous suicide mission of all -- eliminating the evil mastermind behind FEAR ITSELF!',
      publishedAt: new Date('2011-07-27'),
      series: series.secretAvengers,
      issueNumber: '15',
    }),
    secretAvengers16: i({
      title: 'Secret Avengers #16',
      synopsis:
        'A city buried a mile beneath American soil, only discovered through leakage of von Doom radiation -- emitted only by time-travel devices. A mission underground to this strange metropolis-- because a time machine is the worst kind of WMD imaginable!',
      publishedAt: new Date('2011-08-31'),
      series: series.secretAvengers,
      issueNumber: '16',
    }),
    secretAvengers17: i({
      title: 'Secret Avengers #17',
      synopsis:
        "MI:13 discovers people being abducted from the former Yugoslavian region -- but the government won't act. Danger summons the Secret Avengers, but even the added strength of War Machine and Valkyrie won't prepare them for this bioterror!",
      publishedAt: new Date('2011-09-28'),
      series: series.secretAvengers,
      issueNumber: '17',
    }),
    secretAvengers18: i({
      title: 'Secret Avengers #18',
      synopsis:
        'A football-sized can of matter is enough to turn Earth into a sun. There are people who would do just that to hold Earth at ransom -- or just die and take Earth with them. Only Steve Rogers, Black Widow and Shang-Chi stand between us and oblivion!',
      publishedAt: new Date('2011-10-26'),
      series: series.secretAvengers,
      issueNumber: '18',
    }),
    secretAvengers19: i({
      title: 'Secret Avengers #19',
      synopsis:
        'In the city of Aniana, a drug lord plans to sell something to the Shadow Council. The Secret Avengers must get there before the handover, and take whatever the goods are. This mission uncovers an unexpected, ancient, and terrible threat to the world!',
      publishedAt: new Date('2011-11-23'),
      series: series.secretAvengers,
      issueNumber: '19',
    }),
    secretAvengers20: i({
      title: 'Secret Avengers #20',
      synopsis:
        "The Secret Avengers are all dead...save for the Black Widow. The world's greatest secret agent finds herself one year in the past, on the most secret mission of all: saving her team and the world without letting anyone see her -- especially her team.",
      publishedAt: new Date('2011-12-28'),
      series: series.secretAvengers,
      issueNumber: '20',
    }),
    secretAvengers21: i({
      title: 'Secret Avengers #21',
      synopsis:
        'Captain America and Hawkeye undertake a mission to the Red Light Nation, a country run by criminals, for criminals!',
      publishedAt: new Date('2012-01-18'),
      series: series.secretAvengers,
      issueNumber: '21',
    }),
    'secretAvengers21.1': i({
      title: 'Secret Avengers #21.1',
      publishedAt: new Date('2012-01-25'),
      series: series.secretAvengers,
      issueNumber: '21.1',
    }),
    secretAvengers22: i({
      title: 'Secret Avengers #22',
      synopsis:
        "Captain Britain and Giant-Man join Hawkeye's new Secret Avengers team! Featuring the Adaptoids! Sentinels hunt mutants, Adaptoids hunt Avengers!",
      publishedAt: new Date('2012-02-08'),
      series: series.secretAvengers,
      issueNumber: '22',
    }),
    secretAvengers23: i({
      title: 'Secret Avengers #23',
      synopsis: 'Who are The Descendants?',
      publishedAt: new Date('2012-03-01'),
      series: series.secretAvengers,
      issueNumber: '23',
    }),
    secretAvengers24: i({
      title: 'Secret Avengers #24',
      synopsis:
        "Hawkeye's leadership will be put to the ultimate test after an Avenger dies! The Secret Avengers are trapped in an automaton city in the center of the Earth! Their only hope to escape and defeat Father lies with a New Avenger. Will he get there in time?!",
      publishedAt: new Date('2012-03-28'),
      series: series.secretAvengers,
      issueNumber: '24',
    }),
    secretAvengers25: i({
      title: 'Secret Avengers #25',
      synopsis:
        '• The Final Ascension Of The Adaptoids, Deathlok Legion, Sentinaughts, Ultravisions, And Machine People! • Can The Secret Avengers Stop These Descendants From Carrying Out Contagious Robotic Evolution? • A Dead Friend Returns! An Avenger Mortally Injured! A Spy In Their Midst! The Lighthouse Compromised! • A New Race Is Born!',
      publishedAt: new Date('2012-04-11'),
      series: series.secretAvengers,
      issueNumber: '25',
    }),
    secretAvengers26: i({
      title: 'Secret Avengers #26',
      synopsis:
        'AVX TIE-IN Attempting to stop the Phoenix Force by any means necessary, Thor gathers the SECRET AVENGERS for a fight against the ancient power that may prove to be a battle that none of the team will be able to return from.',
      publishedAt: new Date('2012-04-25'),
      series: series.secretAvengers,
      issueNumber: '26',
    }),
    secretAvengers27: i({
      title: 'Secret Avengers #27',
      synopsis:
        'AVX TIE-IN! Captain Marvel reborn to unite all Kree! Captain Marvel, The Protector and Ms. Marvel vs The Avengers! Who is Minister Marvel and why has he drawn the Phoenix to the Kree homeworld?',
      publishedAt: new Date('2012-05-23'),
      series: series.secretAvengers,
      issueNumber: '27',
    }),
    secretAvengers28: i({
      title: 'Secret Avengers #28',
      synopsis:
        "The Avengers have found a way to save the Kree homeworld, but one man stands in their way: Captain Marvel! Can Ms. Marvel and Protector break free of Minister Marvel's control? When all else fails, one Avenger must rise and make the ultimate sacrifice.",
      publishedAt: new Date('2012-06-20'),
      series: series.secretAvengers,
      issueNumber: '28',
    }),
    secretAvengers29: i({
      title: 'Secret Avengers #29',
      synopsis:
        'To prevent a death the Secret Avengers must risk starting a war!A secret romance heats up! A rivalry between two members threatens to jeopardize the mission! Will Hawkeye discover he has a spy on his team in time to prevent tragedy?',
      publishedAt: new Date('2012-07-25'),
      series: series.secretAvengers,
      issueNumber: '29',
    }),
    secretAvengers30: i({
      title: 'Secret Avengers #30',
      synopsis:
        "- High-spy-adventure! Hawkeye, Venom and Ant-Man must defeat an army of villains to grab Max Fury! - Secrets! The truth behind the Shadow Council's ultimate plot! - Finally! The new Masters of Evil strike! - Paranoia! Black Widow knows who the traitor is, but can she get to her teammates in time to save them from his schemes?",
      publishedAt: new Date('2012-08-22'),
      series: series.secretAvengers,
      issueNumber: '30',
    }),
    secretAvengers31: i({
      title: 'Secret Avengers #31',
      synopsis:
        "The Masters of Evil are gathered. An army of villains unlike any ever collected before. The Secret Avengers are defeated with no hope of backup. The Shadow Council's true goal and Max Fury's ultimate scheme revealed. Enter the power of The Abyss!",
      publishedAt: new Date('2012-09-26'),
      series: series.secretAvengers,
      issueNumber: '31',
    }),
    secretAvengers32: i({
      title: 'Secret Avengers #32',
      synopsis:
        'The Abyss spreads! The new Masters of Evil begin their invasion! A traitor amidst the Avengers is revealed! A friendship is forever shattered! An Avenger quits! And a shocking death threatens to destroy the team!',
      publishedAt: new Date('2012-10-10'),
      series: series.secretAvengers,
      issueNumber: '32',
    }),
    secretAvengers33: i({
      title: 'Secret Avengers #33',
      synopsis:
        'THE RISE OF THE DESCENDANTS PART 1 The Descendants siege the Avengers Lighthouse station, and Father launches his invasion! Can the Marvel Universe survive the plague of contagious robotic evolution? Also: beware new Avengers foe The Black Ant!',
      publishedAt: new Date('2012-10-24'),
      series: series.secretAvengers,
      issueNumber: '33',
    }),
    secretAvengers34: i({
      title: 'Secret Avengers #34',
      synopsis:
        "The robots of the Marvel Universe revolt! With the main team down, it's up to the Secret Avengers to stop Father's invasion and plague of robot evolution! But why has Captain Britain hurled mankind's only hope into the black heart of Earth-4680?",
      publishedAt: new Date('2012-11-28'),
      series: series.secretAvengers,
      issueNumber: '34',
    }),
    secretAvengers35: i({
      title: 'Secret Avengers #35',
      synopsis:
        'Contagious Robotic Evolution is go and the remaining Secret Avengers are the only ones left! But how do you stop a plague that has already begun to spread? Torch, Venom and Valkyrie infiltrate the rebel robot base In The Core, but are Lord UltraVision and Monarch Machine Man friend or foe?,Torch must choose between mankind and the perfect future Father will create for all automatons',
      publishedAt: new Date('2012-12-19'),
      series: series.secretAvengers,
      issueNumber: '35',
    }),
    secretAvengers36: i({
      title: 'Secret Avengers #36',
      synopsis:
        'Venom and Valkyrie set out on a mission to kill Father in the Core. The Master Mold rises in New York and the only way to stop him is to kill The Torch! And Black-Ant vs. Hawkeye have their final showdown!',
      publishedAt: new Date('2013-01-09'),
      series: series.secretAvengers,
      issueNumber: '36',
    }),
    secretAvengers37: i({
      title: 'Secret Avengers #37',
      synopsis:
        'The conclusion to the Rise of the Descendants! All secrets revealed! Father and the Descendants begin Contagious Robotic Evolution, merging the Descendants with all of humanity! What is the secret behind the power of Parvez? The ultimate test of Hawkeye!',
      publishedAt: new Date('2013-02-06'),
      series: series.secretAvengers,
      issueNumber: '37',
    }),

    webOfVenomTheGoodSon1: i({
      title: 'Web of Venom: The Good Son #1',
      synopsis:
        'WHILE VENOM’S AWAY, THE CHILDREN WILL PLAY! Dylan Brock and Normie Osborn have survived the trials of ABSOLUTE CARNAGE, but what’s next for the Goblin Childe and the Son of Venom?',
      publishedAt: new Date('2020-01-22'),
      series: series.webOfVenomTheGoodSon,
      issueNumber: '1',
    }),

    captainAmericaSentinelOfLiberty2: i({
      title: 'Captain America: Sentinel of Liberty #2',
      synopsis:
        'In a flashback to 1942, things seem rather fishy when the Atlanteans and the Human Torch form alliances with the Nazis!',
      publishedAt: new Date('1998-10-01'),
      series: series.captainAmericaSentinelOfLiberty,
      issueNumber: '2',
    }),
  };
};

export type Issues = ReturnType<typeof seedIssues>;
