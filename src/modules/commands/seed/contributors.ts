import { Cover, Issue, Person } from '@comics-map/shared';
import { Covers } from '@commands/seed/covers';
import { addContributors, Em } from '@commands/seed/helpers';
import { Issues } from '@commands/seed/issues';
import { People } from '@commands/seed/people';

export const seedContributors = (
  em: Em,
  people: People,
  issues: Issues,
  covers: Covers,
) => {
  const add = (
    issue: Issue,
    spec: {
      writers?: Person[];
      artists?: Person[];
      coverArtists?: { cover: Cover; people: Person[] }[];
    },
  ) => addContributors(em, issue, spec);

  add(issues.armageddonCGD2026, {
    writers: [people.chipZdarsky, people.jedMacKay, people.ryanNorth],
    artists: [
      people.frankAlpizar,
      people.delioDiaz,
      people.federicoVicentini,
      people.francescoMobili,
    ],
    coverArtists: [
      {
        cover: covers.armageddonCGD2026,
        people: [people.ryanStegman, people.arthurHesli],
      },
    ],
  });

  add(issues.shield1, {
    writers: [people.jonathanHickman],
    artists: [people.dustinWeaver],
    coverArtists: [{ cover: covers.shield1, people: [people.geraldParel] }],
  });
  add(issues.shield2, {
    writers: [people.jonathanHickman],
    artists: [people.dustinWeaver],
    coverArtists: [{ cover: covers.shield2, people: [people.geraldParel] }],
  });

  add(issues.amazingSpiderManFCBD2025, {
    writers: [people.joeKelly, people.codyZiglar, people.denizCamp],
    artists: [people.johnRomitaJr, people.jonasScharf],
    coverArtists: [
      {
        cover: covers.amazingSpiderManFCBD2025,
        people: [people.patrickGleason, people.deanWhite],
      },
    ],
  });

  add(issues.allNewVenom1, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      {
        cover: covers.allNewVenom1.default,
        people: [people.adamKubert, people.frankDArmata],
      },
      { cover: covers.allNewVenom1.insignia, people: [people.unknown] },
    ],
  });
  add(issues.allNewVenom2, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom2, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom3, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom3, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom4, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom4, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom5, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      {
        cover: covers.allNewVenom5.default,
        people: [people.adamKubert, people.lauraMartin],
      },
      {
        cover: covers.allNewVenom5.erikLarsen,
        people: [people.erikLarsen, people.alexSinclair],
      },
    ],
  });
  add(issues.allNewVenom6, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom6, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom7, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom7, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom8, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom8, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom9, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.allNewVenom9, people: [people.adamKubert] }],
  });
  add(issues.allNewVenom10, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      { cover: covers.allNewVenom10, people: [people.adamKubert] },
    ],
  });

  add(issues.venom250, {
    writers: [people.alEwing, people.charlesSoule],
    coverArtists: [{ cover: covers.venom250, people: [people.ryanStegman] }],
  });
  add(issues.venom251, {
    writers: [people.alEwing],
    artists: [people.pacoMedina],
    coverArtists: [
      {
        cover: covers.venom251,
        people: [people.carlosGomez, people.frankMartin],
      },
    ],
  });
  add(issues.venom252, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      {
        cover: covers.venom252,
        people: [people.carlosGomez, people.frankMartin],
      },
    ],
  });
  add(issues.venom253, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.venom253, people: [people.carlosGomez] }],
  });
  add(issues.venom254, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      {
        cover: covers.venom254,
        people: [people.carlosGomez, people.frankMartin],
      },
    ],
  });
  add(issues.venom255, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [{ cover: covers.venom255, people: [people.carlosGomez] }],
  });
  add(issues.venom256, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      { cover: covers.venom256, people: [people.giuseppeCamuncoli] },
    ],
  });
  add(issues.venom257, {
    writers: [people.charlesSoule],
    artists: [people.javierPina],
    coverArtists: [
      { cover: covers.venom257, people: [people.giuseppeCamuncoli] },
    ],
  });
  add(issues.venom258, {
    writers: [people.alEwing],
    artists: [people.carlosGomez],
    coverArtists: [
      { cover: covers.venom258, people: [people.giuseppeCamuncoli] },
    ],
  });

  add(issues.webOfVenom1, {
    writers: [people.jordanMorris],
    artists: [people.lukeRoss, people.ramonRosanas],
    coverArtists: [
      {
        cover: covers.webOfVenom1,
        people: [people.stefanoCaselli, people.federicoBlee],
      },
    ],
  });

  add(issues.theAmazingSpiderMan23, {
    writers: [people.joeKelly],
    artists: [people.edMcguinness],
    coverArtists: [
      {
        cover: covers.theAmazingSpiderMan23,
        people: [people.edMcguinness],
      },
    ],
  });
  add(issues.theAmazingSpiderMan24, {
    writers: [people.joeKelly, people.charlesSoule],
    artists: [people.jesusSaiz],
    coverArtists: [
      {
        cover: covers.theAmazingSpiderMan24,
        people: [people.giuseppeCamuncoli, people.carlosGomez],
      },
    ],
  });
  add(issues.theAmazingSpiderMan25, {
    writers: [people.joeKelly],
    coverArtists: [
      {
        cover: covers.theAmazingSpiderMan25,
        people: [people.edMcguinness],
      },
    ],
  });
  add(issues.theAmazingSpiderMan26, {
    writers: [people.joeKelly],
    artists: [people.francescoManna, people.edMcguinness],
    coverArtists: [
      {
        cover: covers.theAmazingSpiderMan26,
        people: [people.ryanStegman, people.marteGracia],
      },
    ],
  });
  add(issues.theAmazingSpiderMan27, {
    writers: [people.joeKelly],
    artists: [people.carlosGomez, people.francescoManna, people.edMcguinness],
    coverArtists: [
      {
        cover: covers.theAmazingSpiderMan27,
        people: [people.edMcguinness],
      },
    ],
  });

  add(issues.ultimateUniverseTwoYearsIn, {
    writers: [people.denizCamp, people.alexPaknadel],
    artists: [
      people.patrickBoutin,
      people.philNoto,
      people.francescoManna,
      people.leeFerguson,
      people.javierPulido,
    ],
    coverArtists: [
      {
        cover: covers.ultimateUniverseTwoYearsIn.default,
        people: [people.ryanStegman],
      },
      {
        cover: covers.ultimateUniverseTwoYearsIn.daredevil,
        people: [people.giuseppeCamuncoli],
      },
    ],
  });

  add(issues.ultimateEndgame1, {
    writers: [people.denizCamp],
    artists: [people.terryDodson, people.rachelDodson, people.jonasScharf],
    coverArtists: [
      { cover: covers.ultimateEndgame1.default, people: [people.markBrooks] },
      { cover: covers.ultimateEndgame1.cafu, people: [people.cafu] },
    ],
  });
  add(issues.ultimateEndgame2, {
    writers: [people.denizCamp],
    artists: [people.terryDodson, people.rachelDodson, people.jonasScharf],
    coverArtists: [
      { cover: covers.ultimateEndgame2, people: [people.markBrooks] },
    ],
  });
  add(issues.ultimateEndgame3, {
    writers: [people.denizCamp],
    artists: [people.terryDodson, people.rachelDodson, people.jonasScharf],
    coverArtists: [
      { cover: covers.ultimateEndgame3, people: [people.markBrooks] },
    ],
  });
  add(issues.ultimateEndgame4, {
    writers: [people.denizCamp],
    artists: [people.terryDodson, people.rachelDodson, people.jonasScharf],
    coverArtists: [
      { cover: covers.ultimateEndgame4, people: [people.markBrooks] },
    ],
  });

  add(issues.ultimateSpiderMan55, {
    writers: [people.brianMichaelBendis],
    artists: [people.markBagley],
    coverArtists: [
      {
        cover: covers.ultimateSpiderMan55,
        people: [people.markBagley, people.richardIsanove],
      },
    ],
  });
  add(issues.ultimateSpiderMan67, {
    writers: [people.brianMichaelBendis],
    artists: [people.markBagley],
    coverArtists: [
      {
        cover: covers.ultimateSpiderMan67,
        people: [people.markBagley, people.richardIsanove],
      },
    ],
  });
  add(issues.ultimateSpiderMan115, {
    writers: [people.brianMichaelBendis],
    artists: [people.stuartImmonen],
    coverArtists: [
      { cover: covers.ultimateSpiderMan115, people: [people.stuartImmonen] },
    ],
  });

  add(issues.webOfVenomTheGoodSon1, {
    writers: [people.zacThompson],
    artists: [people.dioNeves],
    coverArtists: [
      {
        cover: covers.webOfVenomTheGoodSon1,
        people: [people.philipTan, people.jayDavidRamos],
      },
    ],
  });

  add(issues.captainAmericaSentinelOfLiberty2, {
    writers: [people.ronGarney],
    artists: [people.ronGarney, people.markWaid],
    coverArtists: [
      {
        cover: covers.captainAmericaSentinelOfLiberty2,
        people: [people.ronGarney],
      },
    ],
  });

  add(issues.secretAvengers1, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr, people.markoDjurdjevic],
    coverArtists: [
      {
        cover: covers.secretAvengers1,
        people: [people.markoDjurdjevic],
      },
    ],
  });
  add(issues.secretAvengers2, {
    coverArtists: [
      {
        cover: covers.secretAvengers2,
        people: [people.markoDjurdjevic, people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers3, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr, people.markoDjurdjevic],
    coverArtists: [
      {
        cover: covers.secretAvengers3,
        people: [people.markoDjurdjevic],
      },
    ],
  });
  add(issues.secretAvengers4, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr, people.markoDjurdjevic],
    coverArtists: [
      {
        cover: covers.secretAvengers4,
        people: [people.markoDjurdjevic, people.alexSchomburg],
      },
    ],
  });
  add(issues.secretAvengers5, {
    writers: [people.edBrubaker],
    artists: [
      people.davidAja,
      people.markoDjurdjevic,
      people.stefanoGaudiano,
      people.michaelLark,
    ],
    coverArtists: [
      {
        cover: covers.secretAvengers5,
        people: [people.markoDjurdjevic, people.alexSchomburg],
      },
    ],
  });
  add(issues.secretAvengers6, {
    writers: [people.edBrubaker],
    artists: [people.markoDjurdjevic, people.mikeDeodatoJr],
    coverArtists: [
      {
        cover: covers.secretAvengers6,
        people: [people.markoDjurdjevic],
      },
    ],
  });
  add(issues.secretAvengers7, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr],
    coverArtists: [
      {
        cover: covers.secretAvengers7,
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers8, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr],
    coverArtists: [
      {
        cover: covers.secretAvengers8,
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers9, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr],
    coverArtists: [
      {
        cover: covers.secretAvengers9,
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers10, {
    writers: [people.edBrubaker],
    artists: [people.mikeDeodatoJr],
    coverArtists: [
      {
        cover: covers.secretAvengers10,
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers11, {
    writers: [people.edBrubaker],
    artists: [people.robertoDelatorre],
    coverArtists: [
      {
        cover: covers.secretAvengers11,
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers12, {
    writers: [people.edBrubaker],
    artists: [people.robertoDelatorre],
    coverArtists: [
      {
        cover: covers.secretAvengers12,
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues['secretAvengers12.1'], {
    writers: [people.edBrubaker],
    artists: [people.scottGeorgeEaton],
    coverArtists: [
      {
        cover: covers['secretAvengers12.1'],
        people: [people.mikeDeodatoJr],
      },
    ],
  });
  add(issues.secretAvengers13, {
    writers: [people.nickSpencer],
    artists: [people.scottGeorgeEaton],
    coverArtists: [
      {
        cover: covers.secretAvengers13,
        people: [people.adiGranov],
      },
    ],
  });
  add(issues.secretAvengers14, {
    writers: [people.nickSpencer],
    artists: [people.scottGeorgeEaton],
    coverArtists: [
      {
        cover: covers.secretAvengers14,
        people: [people.adiGranov],
      },
    ],
  });
  add(issues.secretAvengers15, {
    writers: [people.nickSpencer],
    artists: [people.scottGeorgeEaton],
    coverArtists: [
      {
        cover: covers.secretAvengers15,
        people: [people.adiGranov],
      },
    ],
  });
  add(issues.secretAvengers16, {
    writers: [people.warrenEllis],
    artists: [people.jamieMcKelvie],
    coverArtists: [
      {
        cover: covers.secretAvengers16,
        people: [people.paulMounts, people.johnCassaday],
      },
    ],
  });
};
