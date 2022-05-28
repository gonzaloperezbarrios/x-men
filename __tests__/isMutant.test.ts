import  isMutant  from '../src/application/isMutant';

const DNA_MOCK = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];

const DNA_MOCK2 = ['ATGCGA','CGGTGC','TTATAT','AGAAGG', 'CTCCTA', 'TCACTG'];

test('isMutant: Valid if you have mutant DNA', () => {
    expect(isMutant(DNA_MOCK)).toBe(true);
});

test("isMutant: Valid if you don't have mutant DNA", () => {
    expect(isMutant(DNA_MOCK2)).toBe(false);
});
