import { Em, makeCover } from '@commands/seed/helpers';

export const seedCovers = (em: Em) => {
  const c = makeCover(em);
  return {
    armageddonCGD2026: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/d0/69ce93e8d4488/clean.jpg',
      isVariant: false,
      barcodes: ['75960621597300111'],
    }),

    amazingSpiderManFCBD2025: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/d/03/679271b069e15/clean.jpg',
      isVariant: false,
      barcodes: ['75960621236100111'],
    }),

    shield1: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/60/5c59c10b90fa9/clean.jpg',
      isVariant: false,
    }),
    shield2: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/60/5c59c988e6107/clean.jpg',
      isVariant: false,
    }),

    allNewVenom1: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6750d4ca845f5/clean.jpg',
        isVariant: false,
      }),
      insignia: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/5/e0/67472cb20b43c/clean.jpg',
        isVariant: true,
        barcodes: ['75960621047300131'],
      }),
    },
    allNewVenom2: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/20/678035f38e2e7/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300211'],
    }),
    allNewVenom3: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/67ab71c77f113/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300311'],
    }),
    allNewVenom4: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/04/67d9cefeed681/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300411'],
    }),
    allNewVenom5: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/30/67d9a0688b195/clean.jpg',
        isVariant: false,
      }),
      erikLarsen: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/c0/67ed646369946/clean.jpg',
        isVariant: true,
        barcodes: ['75960621047300531'],
      }),
    },
    allNewVenom6: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/30/6808f3d392d85/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300611'],
    }),
    allNewVenom7: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/6841c9e60b52d/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300711'],
    }),
    allNewVenom8: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/10/685c5417b11d1/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300811'],
    }),
    allNewVenom9: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/688a5e5d8046c/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047300911'],
    }),
    allNewVenom10: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/68ae03d3ed81a/clean.jpg',
      isVariant: false,
      barcodes: ['75960621047301011'],
    }),

    venom250: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/10/68c9b5d62d735/clean.jpg',
      isVariant: false,
    }),
    venom251: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6903bd4469fd1/clean.jpg',
      isVariant: false,
    }),
    venom252: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/691f324c74c1e/clean.jpg',
      isVariant: false,
    }),
    venom253: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/50/6957e871a0c88/clean.jpg',
      isVariant: false,
    }),
    venom254: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/00/697b8ad47f0b7/clean.jpg',
      isVariant: false,
    }),
    venom255: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/50/69a0877e7cf5d/clean.jpg',
      isVariant: false,
    }),
    venom256: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/d0/69b427274b4c8/clean.jpg',
      isVariant: false,
    }),
    venom257: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/69ce9404c731f/clean.jpg',
      isVariant: false,
    }),
    venom258: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/b0/69974a110d5e6/clean.jpg',
      isVariant: false,
    }),

    webOfVenom1: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/f0/696a5ee53ac76/clean.jpg',
      isVariant: false,
    }),

    theAmazingSpiderMan23: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/00/6997713a7e611/clean.jpg',
      isVariant: false,
    }),
    theAmazingSpiderMan24: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/20/69a0877e774bb/clean.jpg',
      isVariant: false,
    }),
    theAmazingSpiderMan25: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/40/69aee042ad914/clean.jpg',
      isVariant: false,
    }),
    theAmazingSpiderMan26: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/90/69bd5dcc50474/clean.jpg',
      isVariant: false,
      barcodes: ['75960621001502611'],
    }),
    theAmazingSpiderMan27: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/d0/69cfe756b8388/clean.jpg',
      isVariant: false,
    }),

    ultimateUniverseTwoYearsIn: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/691f324c6c18b/clean.jpg',
        isVariant: false,
        barcodes: ['75960621248400111'],
      }),
      daredevil: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/8/70/691f33a00a1cd/clean.jpg',
        isVariant: true,
        barcodes: ['75960621248400121'],
      }),
    },

    ultimateEndgame1: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/693ae1395de55/clean.jpg',
        isVariant: false,
      }),
      cafu: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/c0/693ae20e5486e/clean.jpg',
        isVariant: true,
        barcodes: ['75960621336800141'],
      }),
    },
    ultimateEndgame2: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/10/69724eac69354/clean.jpg',
      isVariant: false,
      barcodes: ['75960621336800211'],
    }),
    ultimateEndgame3: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/a0/69aedff0d922c/clean.jpg',
      isVariant: false,

      barcodes: ['75960621336800311'],
    }),
    ultimateEndgame4: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/2/c0/019dc145bf44/clean.jpg',
      isVariant: false,
    }),

    ultimateSpiderMan55: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/50/58e3e6a0ce6d1/clean.jpg',
      isVariant: false,
    }),
    ultimateSpiderMan67: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/60/58e69cb4468cf/clean.jpg',
      isVariant: false,
      barcodes: ['75960605031406711'],
    }),
    ultimateSpiderMan115: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/40/58e7c56bd2848/clean.jpg',
      isVariant: false,
      barcodes: ['75960605031411511'],
    }),

    webOfVenomTheGoodSon1: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/5e1c8c7f75703/clean.jpg',
      isVariant: false,
      barcodes: ['75960609532200111'],
    }),

    captainAmericaSentinelOfLiberty2: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/e/03/57c08243690e9/clean.jpg',
      isVariant: false,
    }),

    secretAvengers1: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/5189711d4aa5f/clean.jpg',
      isVariant: false,
    }),
    secretAvengers2: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/30/5189710fab2c5/clean.jpg',
      isVariant: false,
    }),
    secretAvengers3: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/b/10/5189710972582/clean.jpg',
      isVariant: false,
    }),
    secretAvengers4: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/8/f0/519fa0b53b2d6/clean.jpg',
      isVariant: false,
    }),
    secretAvengers5: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/80/5189723413840/clean.jpg',
      isVariant: false,
    }),
    secretAvengers6: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/2/e0/5189723a1a33a/clean.jpg',
      isVariant: false,
    }),
    secretAvengers7: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/60/51897226a6aa4/clean.jpg',
      isVariant: false,
    }),
    secretAvengers8: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/5/03/5189722042a5f/clean.jpg',
      isVariant: false,
    }),
    secretAvengers9: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/03/51897311e86a1/clean.jpg',
      isVariant: false,
    }),
    secretAvengers10: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/d/03/5189731b2783d/clean.jpg',
      isVariant: false,
    }),
    secretAvengers11: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/03/51897326f40b0/clean.jpg',
      isVariant: false,
    }),
    secretAvengers12: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/f0/5189732aa4e79/clean.jpg',
      isVariant: false,
    }),
    'secretAvengers12.1': c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/a0/579b5ddf0de15/clean.jpg',
      isVariant: false,
    }),
  };
};

export type Covers = ReturnType<typeof seedCovers>;
