import {
  ContributorRole,
  Cover,
  Issue,
  IssueContributor,
  Person,
  Publisher,
  ReadingEdge,
} from '@entities/index';
import { EntityManager } from '@mikro-orm/postgresql';
import { Command, CommandRunner, Option } from 'nest-commander';

interface SeedCommandOptions {
  fresh?: boolean;
}

@Command({
  name: 'seed',
  description: 'Seed the database with initial data',
})
export class SeedCommand extends CommandRunner {
  constructor(private readonly em: EntityManager) {
    super();
  }

  @Option({
    flags: '-f, --fresh',
    description: 'Drop all data before seeding',
    defaultValue: false,
  })
  parseFresh(): boolean {
    return true;
  }

  async run(params: string[], options?: SeedCommandOptions): Promise<void> {
    const em = this.em.fork();

    if (options?.fresh)
      await em
        .getConnection()
        .execute(
          'TRUNCATE TABLE "people", "issues", "covers" RESTART IDENTITY CASCADE',
        );

    const people = {
      alEwing: em.create(Person, { displayName: 'Al Ewing' }),
      pacoMedina: em.create(Person, { displayName: 'Paco Medina' }),
      carlosGomez: em.create(Person, { displayName: 'Carlos Gomez' }),
      jordanMorris: em.create(Person, { displayName: 'Jordan Morris' }),
      lukeRoss: em.create(Person, { displayName: 'Luke Ross' }),
      ramonRosanas: em.create(Person, { displayName: 'Ramon Rosanas' }),
      frankMartin: em.create(Person, { displayName: 'Frank Martin' }),
      stefanoCaselli: em.create(Person, { displayName: 'Stefano Caselli' }),
      federicoBlee: em.create(Person, { displayName: 'Federico Blee' }),
      giuseppeCamuncoli: em.create(Person, {
        displayName: 'Giuseppe Camuncoli',
      }),
      charlesSoule: em.create(Person, { displayName: 'Charles Soule' }),
      javierPina: em.create(Person, { displayName: 'Javier Pina' }),
      ryanStegman: em.create(Person, { displayName: 'Ryan Stegman' }),
      adamKubert: em.create(Person, { displayName: 'Adam Kubert' }),
      joeKelly: em.create(Person, { displayName: 'Joe Kelly' }),
      francescoManna: em.create(Person, { displayName: 'Francesco Manna' }),
      edMcguinness: em.create(Person, { displayName: 'Ed McGuinness' }),
      marteGracia: em.create(Person, { displayName: 'Marte Gracia' }),
      frankDArmata: em.create(Person, { displayName: "Frank D'Armata" }),
      alexSinclair: em.create(Person, { displayName: 'Alex Sinclair' }),
      lauraMartin: em.create(Person, { displayName: 'Laura Martin' }),
      erikLarsen: em.create(Person, { displayName: 'Erik Larsen' }),
    };

    const issues = {
      allNewVenom1: em.create(Issue, {
        title: 'All-New Venom #1',
        synopsis:
          "WHO IS THE ALL-NEW VENOM? The smiling, swashbuckling spider-hero New York loves to hate to love is back - and more fun-loving than ever! That's right, it's... Wait, it's VENOM?! An all-new host is taking the symbiote in a whole new direction - but who? It could be the Journalist...the Terrorist...the Sidekick... or even the Mayor... We're giving you all the clues, good believers - but you won't know until the mask comes off! Writer Al Ewing (VENOM, IMMORTAL THOR) takes Venom in a completely new direction with artist Carlos Gómez (FANTASTIC FOUR, THE AMAZING MARY JANE) bringing the story to gorgeous life!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2024-12-04'),
      }),
      allNewVenom2: em.create(Issue, {
        title: 'All-New Venom #2',
        synopsis:
          "A.I.M. AND FIRE! A.I.M. are on the hunt for the All-New Venom - and they're not alone! Who are.. the SYMBIOTE SQUAD? Meanwhile, Dylan Brock's search for the new Venom host puts him on a collision course with the deadly Madame Masque! And the mystery deepens as one suspect is eliminated... with extreme prejudice!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-01-08'),
      }),
      allNewVenom3: em.create(Issue, {
        title: 'All-New Venom #3',
        synopsis:
          'HERE COMES THE SON! At last - the All-New Venom comes face-to-face with Dylan Brock! After all this time, how will symbiote and son react? Meanwhile, Madame Masque is making her move against A.I.M. - but is she doing it from inside a black-and-gold symbiote? As another suspect is eliminated, the answers are closer than ever...',
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-02-12'),
      }),
      allNewVenom4: em.create(Issue, {
        title: 'All-New Venom #4',
        synopsis:
          "M.O.D.O.K. MADNESS! M.O.D.O.K. gets inside the All-New Venom's head...and you won't believe how! But whose side is Madame Masque on? One thing's for sure - by the time you finish this issue, you'll be one step closer to knowing who's under the goo...Meanwhile, take a visit to S.C.A.R. HQ --and find out what happened to Flash Thompson, Agent Anti-Venom!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-03-12'),
      }),
      allNewVenom5: em.create(Issue, {
        title: 'All-New Venom #5',
        synopsis:
          "WHO IS THE ALL-NEW VENOM…REVEALED?! When all the red herrings have been weeded out - who's left? The clues have been in front of you the whole time - and by the end of this issue, you WILL know the name of the ALL-NEW VENOM...but with M.O.D.O.K. out for symbiote blood, you might just be identifying the corpse!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-04-02'),
      }),
      allNewVenom6: em.create(Issue, {
        title: 'All-New Venom #6',
        synopsis:
          "THE ORIGIN OF THE ALL-NEW VENOM! Now we know WHO the All-New Venom is...the question is HOW? What happened after the events of the Venom War? Why did the symbiote choose this host - and why can't they separate? Jackpot confronts Venom - and she may not like what she finds out!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-05-07'),
      }),
      allNewVenom7: em.create(Issue, {
        title: 'All-New Venom #7',
        synopsis:
          "VENOM VS. ANTI-VENOM! If Flash Thompson doesn't take down the new Venom, his superiors will make sure it's Dylan Brock who pays the price. But now that Flash knows who the new Venom is, can he pull the trigger on the human being underneath? And if he can't...which sinister Spider-villain is waiting in the wings to do it for him?",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-06-04'),
      }),
      allNewVenom8: em.create(Issue, {
        title: 'All-New Venom #8',
        synopsis:
          "EIGHT-ISSUE TENTACULAR SPECTACULAR! As Venom battles the Symbiote Squad at the Daily Bugle, the Sleeper Agent attempts a daring jailbreak on North Brother Island...neither of them knowing that S.C.A.R. has a superior new ally in the war on symbiotes! Doctor Octopus is back - and he's more armed and dangerous than ever!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-07-02'),
      }),
      allNewVenom9: em.create(Issue, {
        title: 'All-New Venom #9',
        synopsis:
          "BREAKUP AND BREAKOUT! It's Team Venom vs. Team Octopus - and the outcome might just decide the fate of Symbiotekind! But what's Doc Ock's real master plan? And why does he need the Sleeper Agent to do it? Meanwhile, Mary Jane's home life goes from bad to worse...as Dylan finally learns the truth!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-08-06'),
      }),
      allNewVenom10: em.create(Issue, {
        title: 'All-New Venom #10',
        synopsis:
          "VENOM VS. MARY JANE WATSON! After the events of last issue, MJ's life is upside down… and there's one symbiote to blame! It's the argument of the century as the world's strangest roommates air all their dirty laundry…but when the last word is said, will any relationship be left standing?",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-09-03'),
      }),
      venom250: em.create(Issue, {
        title: 'Venom #250',
        synopsis:
          'THE RETURN OF KNULL!!! Mary Jane Watson is finally in the swing of things as the new Venom host, using their powers in all-new ways to be the hero the symbiote never knew it could be! But as she cleans up the streets of New York, she remains blissfully unaware of the strands of darkness leading off into the darkness of the void. Knull, the creator of all symbiotes, was killed by Eddie Brock. Nothing could bring him back... but Knull rules over nothing. Knull has returned, and word is racing across the stars to the one who took him down before to prepare to do it again. Will Venom be ready? Join us for a huge celebratory issue as ALL-NEW VENOM becomes VENOM once more and shifts back to the legacy numbering with issue #250!',
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-10-01'),
      }),
      venom251: em.create(Issue, {
        title: 'Venom #251',
        synopsis:
          "BREAK THE STREAK! Doc Ock is back - as Director of Operations for S.C.A.R.! And he's got the all-new Toxin in his sights! Luke Cage isn't happy - but will New York's Mayor choose to side with human law...or symbiote justice? Plus - MJ gets a new gig! Venom gets a new look! And the rollicking return of Blue Streak!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-11-12'),
      }),
      venom252: em.create(Issue, {
        title: 'Venom #252',
        synopsis:
          "THE RUMORS ARE TRUE! Venom has a brand-new red-and-blue suit - and a brand new name to go with it! How will the people of New York react when they find out that the city's newest Spider-Man is the SYMBIOTE they love to loathe? Luke Cage and Otto Octavius are ready to debate the matter - with their fists! PLUS: A bonus tale of the origin of an even All-NEWER Venom! AND a celebratory flashback story by the team behind the classic AMAZING SPIDER-MAN #252!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2025-12-03'),
      }),
      venom253: em.create(Issue, {
        title: 'Venom #253',
        synopsis:
          "MASQUE MAKES HER MOVE! Madame Masque wants Venom out of her way - one way or the other. And somehow, she's found out who's under the goo. With all the power of A.I.M. in her golden glove, she's turning the screws on the world's strangest roommates...but will the goosome twosome squish under the pressure? Or is Madame Masque waking up the monster within?",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-01-07'),
      }),
      venom254: em.create(Issue, {
        title: 'Venom #254',
        synopsis:
          "WAR IN THE STREETS! Mary Jane Watson is piloting the Venom Symbiote, five hundred pounds of wisecracking alien goo monster. Whitney Frost is piloting the Madame Masque Battlesuit, two tons of A.I.M.-constructed, missile-loaded murder machine. How many beloved New York landmarks will perish in the wake of their fury? Let's count! One… two…",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-02-11'),
      }),
      venom255: em.create(Issue, {
        title: 'Venom #255',
        synopsis:
          "THE SECRET IS OUT! DEATH SPIRAL PART THREE! After the shocking events of AMAZING SPIDER-MAN #23, Spider-Man and the All-New Venom have some serious talking to do... But first they've got to solve the one murder neither of them - or their villains - ever expected to face! Meanwhile, EDDIE BROCK is back...with a CARNAGE-sized secret of his own, and a connection to the mystery you'll have to see to believe!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-03-11'),
      }),
      venom256: em.create(Issue, {
        title: 'Venom #256',
        synopsis:
          "DEATH SPIRAL PART SIX! The serial killer Torment is following the path of the Death Spiral...and it's led straight to Dylan Brock! Now the son of Venom is alone, injured and on the run...and Venom's other child might be his only hope. But will Carnage choose to help Dylan...or kill him all over again? Because SOMEONE'S got to die...",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-04-01'),
      }),
      venom257: em.create(Issue, {
        title: 'Venom #257',
        synopsis:
          "DEATH SPIRAL PART EIGHT! Anna Watson and May Parker are caught in the Death Spiral, and their only hope is...Flash Thompson?! Will Spider-Man and Venom save the day, or will MJ and Peter's old wounds create a new tragedy? And where's Carnage in all this? Even when you find out - you STILL won't believe it!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-04-15'),
      }),
      webOfVenom1: em.create(Issue, {
        title: 'Web of Venom #1',
        synopsis:
          "THE EVEN ALL-ER, NEW-ER VENOM?! There is an even NEWER symbiote wearing hero on the scene sporting the red-and-blue Spidey inspired look on the streets of Earth 616...but it's not Mary Jane Watson, and it's not Eddie Parker! But it IS someone that Peter Parker knows well...someone both he AND Spider-Man have had many encounters with...someone looking to use this new web-slinging identity to make their much-deserved comeback! The saga of the new fan favorite Red-And-Blue alien costume takes a whole new turn, kicking a classic Spider character into a whole new direction that they have no intention of giving up!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-04-08'),
      }),
      venom258: em.create(Issue, {
        title: 'Venom #258',
        synopsis:
          "THREE'S A CROWD! In the aftermath of Death Spiral, Mary Jane Watson and Peter Parker have a long overdue heart-to-heart...but when the masks go on, Venom and Spider-Man have some unfinished business! And one way or another, this is going to lead to a BIG change for Venom and MJ!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-05-20'),
      }),
      theAmazingSpiderMan26: em.create(Issue, {
        title: 'The Amazing Spider-Man #26',
        synopsis:
          "DEATH SPIRAL PART SEVEN! SPIDER-MAN is the LAST hero standing against TORMENT'S onslaught! MJ, Eddie and Dylan are in Torment's sights. Peter can't save them all! And Torment's newest ALLY just tipped the scales in the serial killer's favor!",
        publisher: Publisher.Marvel,
        publishedAt: new Date('2026-04-08'),
      }),
    };

    const covers = {
      allNewVenom1: {
        default: em.create(Cover, {
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6750d4ca845f5/clean.jpg',
          isVariant: false,
        }),
        insignia: em.create(Cover, {
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/5/e0/67472cb20b43c/clean.jpg',
          isVariant: true,
          barcodes: ['75960621047300131'],
        }),
      },
      allNewVenom2: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/20/678035f38e2e7/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300211'],
      }),
      allNewVenom3: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/67ab71c77f113/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300311'],
      }),
      allNewVenom4: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/04/67d9cefeed681/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300411'],
      }),
      allNewVenom5: {
        default: em.create(Cover, {
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/30/67d9a0688b195/clean.jpg',
          isVariant: false,
        }),
        erikLarsen: em.create(Cover, {
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/c0/67ed646369946/clean.jpg',
          isVariant: true,
          barcodes: ['75960621047300531'],
        }),
      },
      allNewVenom6: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/30/6808f3d392d85/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300611'],
      }),
      allNewVenom7: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/6841c9e60b52d/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300711'],
      }),
      allNewVenom8: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/10/685c5417b11d1/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300811'],
      }),
      allNewVenom9: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/688a5e5d8046c/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047300911'],
      }),
      allNewVenom10: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/68ae03d3ed81a/clean.jpg',
        isVariant: false,
        barcodes: ['75960621047301011'],
      }),
      venom250: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/10/68c9b5d62d735/clean.jpg',
        isVariant: false,
      }),
      venom251: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6903bd4469fd1/clean.jpg',
        isVariant: false,
      }),
      venom252: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/691f324c74c1e/clean.jpg',
        isVariant: false,
      }),
      venom253: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/50/6957e871a0c88/clean.jpg',
        isVariant: false,
      }),
      venom254: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/00/697b8ad47f0b7/clean.jpg',
        isVariant: false,
      }),
      venom255: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/50/69a0877e7cf5d/clean.jpg',
        isVariant: false,
      }),
      venom256: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/d0/69b427274b4c8/clean.jpg',
        isVariant: false,
      }),
      venom257: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/69ce9404c731f/clean.jpg',
        isVariant: false,
      }),
      venom258: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/b0/69974a110d5e6/clean.jpg',
        isVariant: false,
      }),
      webOfVenom1: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/f0/696a5ee53ac76/clean.jpg',
        isVariant: false,
      }),
      theAmazingSpiderMan26: em.create(Cover, {
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/90/69bd5dcc50474/clean.jpg',
        isVariant: false,
        barcodes: ['75960621001502611'],
      }),
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const issueContributors = {
      allNewVenom1: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom1,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom1,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom1,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom1.default,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom1,
          person: people.frankDArmata,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom1.default,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom1,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom1.insignia,
        }),
      ],
      allNewVenom2: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom2,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom2,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom2,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom2,
        }),
      ],
      allNewVenom3: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom3,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom3,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom3,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom3,
        }),
      ],
      allNewVenom4: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom4,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom4,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom4,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom4,
        }),
      ],
      allNewVenom5: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom5,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom5,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom5,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom5.default,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom5,
          person: people.lauraMartin,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom5.default,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom5,
          person: people.erikLarsen,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom5.erikLarsen,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom5,
          person: people.alexSinclair,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom5.erikLarsen,
        }),
      ],
      allNewVenom6: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom6,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom6,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom6,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom6,
        }),
      ],
      allNewVenom7: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom7,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom7,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom7,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom7,
        }),
      ],
      allNewVenom8: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom8,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom8,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom8,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom8,
        }),
      ],
      allNewVenom9: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom9,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom9,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom9,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom9,
        }),
      ],
      allNewVenom10: [
        em.create(IssueContributor, {
          issue: issues.allNewVenom10,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom10,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.allNewVenom10,
          person: people.adamKubert,
          role: ContributorRole.CoverArtist,
          cover: covers.allNewVenom10,
        }),
      ],
      venom250: [
        em.create(IssueContributor, {
          issue: issues.venom250,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom250,
          person: people.charlesSoule,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom250,
          person: people.ryanStegman,
          role: ContributorRole.CoverArtist,
          cover: covers.venom250,
        }),
      ],
      venom251: [
        em.create(IssueContributor, {
          issue: issues.venom251,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom251,
          person: people.pacoMedina,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom251,
          person: people.carlosGomez,
          role: ContributorRole.CoverArtist,
          cover: covers.venom251,
        }),
        em.create(IssueContributor, {
          issue: issues.venom251,
          person: people.frankMartin,
          role: ContributorRole.CoverArtist,
          cover: covers.venom251,
        }),
      ],
      venom252: [
        em.create(IssueContributor, {
          issue: issues.venom252,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom252,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom252,
          person: people.carlosGomez,
          role: ContributorRole.CoverArtist,
          cover: covers.venom252,
        }),
        em.create(IssueContributor, {
          issue: issues.venom252,
          person: people.frankMartin,
          role: ContributorRole.CoverArtist,
          cover: covers.venom252,
        }),
      ],
      venom253: [
        em.create(IssueContributor, {
          issue: issues.venom253,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom253,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom253,
          person: people.carlosGomez,
          role: ContributorRole.CoverArtist,
          cover: covers.venom253,
        }),
      ],
      venom254: [
        em.create(IssueContributor, {
          issue: issues.venom254,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom254,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom254,
          person: people.carlosGomez,
          role: ContributorRole.CoverArtist,
          cover: covers.venom254,
        }),
        em.create(IssueContributor, {
          issue: issues.venom254,
          person: people.frankMartin,
          role: ContributorRole.CoverArtist,
          cover: covers.venom254,
        }),
      ],
      venom255: [
        em.create(IssueContributor, {
          issue: issues.venom255,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom255,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom255,
          person: people.carlosGomez,
          role: ContributorRole.CoverArtist,
          cover: covers.venom255,
        }),
      ],
      venom256: [
        em.create(IssueContributor, {
          issue: issues.venom256,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom256,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom256,
          person: people.giuseppeCamuncoli,
          role: ContributorRole.CoverArtist,
          cover: covers.venom256,
        }),
      ],
      venom257: [
        em.create(IssueContributor, {
          issue: issues.venom257,
          person: people.charlesSoule,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom257,
          person: people.javierPina,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom257,
          person: people.giuseppeCamuncoli,
          role: ContributorRole.CoverArtist,
          cover: covers.venom257,
        }),
      ],
      webOfVenom1: [
        em.create(IssueContributor, {
          issue: issues.webOfVenom1,
          person: people.jordanMorris,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.webOfVenom1,
          person: people.lukeRoss,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.webOfVenom1,
          person: people.ramonRosanas,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.webOfVenom1,
          person: people.stefanoCaselli,
          role: ContributorRole.CoverArtist,
          cover: covers.webOfVenom1,
        }),
        em.create(IssueContributor, {
          issue: issues.webOfVenom1,
          person: people.federicoBlee,
          role: ContributorRole.CoverArtist,
          cover: covers.webOfVenom1,
        }),
      ],
      venom258: [
        em.create(IssueContributor, {
          issue: issues.venom258,
          person: people.alEwing,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.venom258,
          person: people.carlosGomez,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.venom258,
          person: people.giuseppeCamuncoli,
          role: ContributorRole.CoverArtist,
          cover: covers.venom258,
        }),
      ],
      theAmazingSpiderMan26: [
        em.create(IssueContributor, {
          issue: issues.theAmazingSpiderMan26,
          person: people.joeKelly,
          role: ContributorRole.Writer,
        }),
        em.create(IssueContributor, {
          issue: issues.theAmazingSpiderMan26,
          person: people.francescoManna,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.theAmazingSpiderMan26,
          person: people.edMcguinness,
          role: ContributorRole.Artist,
        }),
        em.create(IssueContributor, {
          issue: issues.theAmazingSpiderMan26,
          person: people.ryanStegman,
          role: ContributorRole.CoverArtist,
          cover: covers.theAmazingSpiderMan26,
        }),
        em.create(IssueContributor, {
          issue: issues.theAmazingSpiderMan26,
          person: people.marteGracia,
          role: ContributorRole.CoverArtist,
          cover: covers.theAmazingSpiderMan26,
        }),
      ],
    };

    em.create(ReadingEdge, {
      from: issues.allNewVenom1,
      to: issues.allNewVenom2,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom2,
      to: issues.allNewVenom3,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom3,
      to: issues.allNewVenom4,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom4,
      to: issues.allNewVenom5,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom5,
      to: issues.allNewVenom6,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom6,
      to: issues.allNewVenom7,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom7,
      to: issues.allNewVenom8,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom8,
      to: issues.allNewVenom9,
    });
    em.create(ReadingEdge, {
      from: issues.allNewVenom9,
      to: issues.allNewVenom10,
    });
    em.create(ReadingEdge, { from: issues.allNewVenom10, to: issues.venom250 });
    em.create(ReadingEdge, { from: issues.venom250, to: issues.venom251 });
    em.create(ReadingEdge, { from: issues.venom251, to: issues.venom252 });
    em.create(ReadingEdge, { from: issues.venom252, to: issues.venom253 });
    em.create(ReadingEdge, { from: issues.venom253, to: issues.venom254 });
    em.create(ReadingEdge, { from: issues.venom254, to: issues.venom255 });
    em.create(ReadingEdge, { from: issues.venom255, to: issues.venom256 });
    em.create(ReadingEdge, { from: issues.venom256, to: issues.venom257 });
    em.create(ReadingEdge, {
      from: issues.theAmazingSpiderMan26,
      to: issues.venom257,
    });
    em.create(ReadingEdge, { from: issues.venom257, to: issues.venom258 });
    em.create(ReadingEdge, { from: issues.webOfVenom1, to: issues.venom258 });

    await em.flush();
  }
}
