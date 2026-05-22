import { Em, makeSeries } from '@commands/seed/helpers';

export const seedSeries = (em: Em) => {
  const s = makeSeries(em);
  return {
    kingInBlack: s({
      title: 'King in Black',
      startYear: 2020,
    }),
    allNewVenom: s({
      title: 'All-New Venom',
      startYear: 2024,
    }),
    venom2025: s({
      title: 'Venom',
      startYear: 2025,
    }),
    webOfVenom2026: s({
      title: 'Web of Venom',
      startYear: 2026,
    }),
    theAmazingSpiderMan2025: s({
      title: 'The Amazing Spider-Man',
      startYear: 2025,
    }),
    deathSpiral2026: s({
      title: 'Amazing Spider-Man/Venom: Death Spiral',
      startYear: 2026,
    }),
    ultimateUniverseTwoYearsIn: s({
      title: 'Ultimate Universe: Two Years In',
      startYear: 2025,
    }),
    ultimateEndgame: s({
      title: 'Ultimate Endgame',
      startYear: 2025,
    }),
    ultimateSpiderMan: s({
      title: 'Ultimate Spider-Man',
      startYear: 2000,
    }),
    secretAvengers: s({
      title: 'Secret Avengers',
      startYear: 2010,
    }),
    avengersArmageddonCGD: s({
      title: 'Avengers Armageddon/X-Men CGD',
      startYear: 2026,
    }),
    amazingSpiderManUltimateFCBD: s({
      title: 'The Amazing Spider-Man/Ultimate Universe FCBD',
      startYear: 2025,
    }),
    shield2011: s({
      title: 'S.H.I.E.L.D.',
      startYear: 2011,
    }),
    webOfVenomTheGoodSon: s({
      title: 'Web of Venom: The Good Son',
      startYear: 2020,
    }),
    captainAmericaSentinelOfLiberty: s({
      title: 'Captain America: Sentinel of Liberty',
      startYear: 1998,
    }),
  };
};

export type Series = ReturnType<typeof seedSeries>;
