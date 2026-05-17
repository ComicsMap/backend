import { Em, readingChain } from '@commands/seed/helpers';
import { Issues } from '@commands/seed/issues';

export const seedReadingEdges = (em: Em, issues: Issues) => {
  readingChain(em, issues.shield1, issues.shield2);

  readingChain(
    em,
    issues.allNewVenom1,
    issues.allNewVenom2,
    issues.allNewVenom3,
    issues.allNewVenom4,
    issues.allNewVenom5,
    issues.allNewVenom6,
    issues.allNewVenom7,
    issues.allNewVenom8,
    issues.allNewVenom9,
    issues.allNewVenom10,
    issues.venom250,
  );
  readingChain(
    em,
    issues.venom250,
    issues.venom251,
    issues.venom252,
    issues.venom253,
    issues.venom254,
    issues.venom255,
    issues.venom256,
    issues.theAmazingSpiderMan26,
    issues.venom257,
    issues.theAmazingSpiderMan27,
  );

  readingChain(em, issues.webOfVenom1, issues.venom258);

  readingChain(
    em,
    issues.ultimateUniverseTwoYearsIn,
    issues.ultimateEndgame1,
    issues.ultimateEndgame2,
    issues.ultimateEndgame3,
    issues.ultimateEndgame4,
  );

  readingChain(
    em,
    issues.secretAvengers2,
    issues.secretAvengers3,
    issues.secretAvengers4,
    issues.secretAvengers5,
    issues.secretAvengers6,
    issues.secretAvengers7,
    issues.secretAvengers8,
    issues.secretAvengers9,
    issues.secretAvengers10,
    issues.secretAvengers11,
    issues.secretAvengers12,
    issues['secretAvengers12.1'],
    issues.secretAvengers13,
    issues.secretAvengers14,
    issues.secretAvengers15,
    issues.secretAvengers16,
    issues.secretAvengers17,
    issues.secretAvengers18,
    issues.secretAvengers19,
    issues.secretAvengers20,
  );
  readingChain(em, issues.secretAvengers22, issues.secretAvengers23);
  readingChain(
    em,
    issues.secretAvengers27,
    issues.secretAvengers28,
    issues.secretAvengers29,
    issues.secretAvengers30,
    issues.secretAvengers31,
  );
};
