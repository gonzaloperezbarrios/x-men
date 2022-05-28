import scanHorizintalUpright from '../src/domain/scanHorizintalUpright';

const DNA_MOCK = [
    ["A", "T", "G", "C", "G", "A"],
    ["C", "A", "G", "T", "G", "C"],
    ["T", "T", "A", "T", "G", "T"],
    ["A", "G", "A", "A", "G", "G"],
    ["C", "C", "C", "C", "T", "A"],
    ["T", "C", "A", "C", "T", "G"]
];

test('scanHorizintalUpright: finds a match in a horizontal or vertical nxn array that has at least 4 values in a row', () => {
    expect(scanHorizintalUpright(DNA_MOCK)).toBe(true);
});
