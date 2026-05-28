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

    shield2011: {
      shield: {
        default: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/b0/5c59b5f0e5f43/clean.jpg',
          isVariant: false,
        }),
        variant1: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/a0/4d9f466f13ca4/clean.jpg',
          isVariant: true,
        }),
      },
      shield1: {
        default: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/60/5c59c10b90fa9/clean.jpg',
          isVariant: false,
          barcodes: ['75960607530000111'],
        }),
        variant1: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/00/4de4ebc41bb83/clean.jpg',
          isVariant: true,
        }),
      },
      shield2: {
        default: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/60/5c59c988e6107/clean.jpg',
          isVariant: false,
        }),
        variant1: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/10/4e32d79c48438/clean.jpg',
          isVariant: true,
        }),
      },
      shield3: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/30/5c59e0aa4ffb3/clean.jpg',
        isVariant: false,
      }),
      shield4: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/b0/5c59ea987c6f7/clean.jpg',
        isVariant: false,
        barcodes: ['759606075301000411'],
      }),
      shield5: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/b/e0/5afc7fd45021a/clean.jpg',
        isVariant: false,
        barcodes: ['759606075301000511'],
      }),
      shield6: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/d/60/5b17054357752/clean.jpg',
        isVariant: false,
        barcodes: ['759606075301000611'],
      }),
    },

    kingInBlack1: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/c0/601afd588b59d/clean.jpg',
        isVariant: false,
      }),
      insignia: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/90/5fbd3fc9c171f/clean.jpg',
        isVariant: true,
        barcodes: ['75960609863700120'],
      }),
    },

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

    venom250: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/10/68c9b5d62d735/clean.jpg',
        isVariant: false,
      }),
      peachMamoko: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/f0/68c9bef53f07b/clean.jpg',
        isVariant: true,
        barcodes: ['75960621330625081'],
      }),
    },
    venom251: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6903bd4469fd1/clean.jpg',
      isVariant: false,
      barcodes: ['75960621330625111'],
    }),
    venom252: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/691f324c74c1e/clean.jpg',
      isVariant: false,
      barcodes: ['75960621330625211'],
    }),
    venom253: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/50/6957e871a0c88/clean.jpg',
        isVariant: false,
      }),
      cosmicInvasion: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/90/6944331fea93b/clean.jpg',
        isVariant: true,
        barcodes: ['75960621330625331'],
      }),
    },
    venom254: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/00/697b8ad47f0b7/clean.jpg',
      isVariant: false,
      barcodes: ['75960621330625411'],
    }),
    venom255: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/50/69a0877e7cf5d/clean.jpg',
        isVariant: false,
      }),
      targetVariant: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/b0/69a08894779b4/clean.jpg',
        isVariant: true,
        barcodes: ['75960621330625551'],
      }),
    },
    venom256: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/d0/69b427274b4c8/clean.jpg',
        isVariant: false,
      }),
      targetVariant: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/d/20/69cd329f6ceb7/clean.jpg',
        isVariant: true,
        barcodes: ['75960621330625651'],
      }),
    },
    venom257: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/69ce9404c731f/clean.jpg',
        isVariant: false,
      }),
      ejSu: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/c0/69ce931f689b8/clean.jpg',
        isVariant: true,
        barcodes: ['75960621330625741'],
      }),
    },
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

    deathSpiral1: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/698df72fceb00/clean.jpg',
      isVariant: false,
      barcodes: [],
    }),

    ultimateUniverseTwoYearsIn: {
      default: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/691f324c6c18b/clean.jpg',
        isVariant: false,
        barcodes: ['75960621248400111'],
      }),
      variant1: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/8/70/691f33a00a1cd/clean.jpg',
        isVariant: true,
        barcodes: ['75960621248400121'],
      }),
      variant2: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/00/691f33a01a754/clean.jpg',
        isVariant: true,
        barcodes: ['75960621248400117'],
      }),
      variant3: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/50/691f339fb1598/clean.jpg',
        isVariant: true,
        barcodes: ['75960621248400116'],
      }),
    },

    ultimateEndgame: {
      ultimateEndgame1: {
        default: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/693ae1395de55/clean.jpg',
          isVariant: false,
          barcodes: ['75960621336800111'],
        }),
        variant1: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/5/d0/693ae20c4037a/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800121'],
        }),
        variant2: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/693ae20d982f8/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800131'],
        }),
        variant3: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/693ae208da580/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800116'],
        }),
        variant4: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/e/e0/693ae210cbeec/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800171'],
        }),
        variant5: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/693ae21047cc4/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800161'],
        }),
        variant6: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/c0/693ae20e5486e/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800141'],
        }),
        variant7: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/50/693ae20a93cdf/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800118'],
        }),
        variant8: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/8/b0/693ae20a224eb/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800117'],
        }),
        variant9: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/10/693ae20b7a42f/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800119'],
        }),
        variant10: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/10/693ae27818752/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800181'],
        }),
        variant11: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/10/693ae20f42244/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800151'],
        }),
        variant12: c({
          url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/f0/693ae2781916d/clean.jpg',
          isVariant: true,
          barcodes: ['75960621336800191'],
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
    },

    ultimateSpiderMan: {
      ultimateSpiderMan55: c({
        url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/50/58e3e6a0ce6d1/clean.jpg',
        isVariant: false,
        barcodes: ['75960605031405511'],
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
    },

    webOfVenomTheGoodSon1: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/5e1c8c7f75703/clean.jpg',
      isVariant: false,
      barcodes: ['75960609532200111'],
    }),

    captainAmericaSentinelOfLiberty2: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/e/03/57c08243690e9/clean.jpg',
      isVariant: false,
      barcodes: ['75960603502100211'],
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
    secretAvengers13: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/50/578f7ee531c67/clean.jpg',
      isVariant: false,
    }),
    secretAvengers14: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/60/578f7fdb71385/clean.jpg',
      isVariant: false,
    }),
    secretAvengers15: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/b0/578f813decb06/clean.jpg',
      isVariant: false,
    }),
    secretAvengers16: c({
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/d/90/518975548012a/clean.jpg',
      isVariant: false,
    }),
  };
};

export type Covers = ReturnType<typeof seedCovers>;
