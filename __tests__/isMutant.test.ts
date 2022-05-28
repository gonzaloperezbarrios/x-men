import  isMutant  from '../src/application/isMutant';

const DNA_MOCK = [
    ['A', 'T', 'G', 'C', 'G', 'A'],
    ['C', 'A', 'G', 'T', 'G', 'C'],
    ['T', 'T', 'A', 'T', 'G', 'T'],
    ['A', 'G', 'A', 'A', 'G', 'G'],
    ['C', 'C', 'C', 'C', 'T', 'A'],
    ['T', 'C', 'A', 'C', 'T', 'G']
];

const DNA_MOCK2 = [
    ['A', 'T', 'G', 'C', 'G', 'A'],
    ['C', 'G', 'G', 'T', 'G', 'C'],
    ['T', 'T', 'A', 'T', 'A', 'T'],
    ['A', 'G', 'A', 'A', 'G', 'G'],
    ['C', 'T', 'C', 'C', 'T', 'A'],
    ['T', 'C', 'A', 'C', 'T', 'G']
];

test('isMutant: Valid if you have mutant DNA', () => {
    expect(isMutant(DNA_MOCK)).toBe(true);
});

test("isMutant: Valid if you don't have mutant DNA", () => {
    expect(isMutant(DNA_MOCK2)).toBe(false);
});
