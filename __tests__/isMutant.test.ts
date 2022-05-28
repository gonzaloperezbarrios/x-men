import  isMutant  from '../src/application/isMutant';

const DNA_MOCK = [
    ["A", "T", "G", "C", "G", "A"],
    ["C", "A", "G", "T", "G", "C"],
    ["T", "T", "A", "T", "G", "T"],
    ["A", "G", "A", "A", "G", "G"],
    ["C", "C", "C", "C", "T", "A"],
    ["T", "C", "A", "C", "T", "G"]
];

test('isMutant: valid if you have mustating DNA', () => {
    expect(isMutant(DNA_MOCK)).toBe(true);
});
