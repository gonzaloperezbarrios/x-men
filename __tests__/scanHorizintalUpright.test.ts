import scanHorizintalUpright from '../src/domain/scanHorizintalUpright';

const DNA_MOCK = [
    ["A", "T", "G", "C", "G", "A"],
    ["C", "A", "G", "T", "G", "C"],
    ["T", "T", "A", "T", "G", "T"],
    ["A", "G", "A", "A", "G", "G"],
    ["C", "C", "C", "C", "T", "A"],
    ["T", "C", "A", "C", "T", "G"]
];

const DNA_MOCK2 = [
    ['G', 'G', 'C', 'A','T', 'G', 'T', 'A','G', 'G'],
    ['C', 'T', 'A', 'G','T', 'C', 'C', 'A','A', 'G'],
    ['G', 'C', 'C', 'T','G', 'C', 'T', 'G','T', 'C'],
    ['G', 'A', 'C', 'C','A', 'A', 'T', 'C','G', 'G'],
    ['G', 'A', 'A', 'T','G', 'A', 'A', 'A','C', 'G'],
    ['T', 'C', 'C', 'A','G', 'C', 'G', 'T','A', 'T'],
    ['C', 'T', 'T', 'A','T', 'T', 'T', 'A','G', 'G'],
    ['G', 'T', 'A', 'A','A', 'T', 'C', 'A','C', 'A'],
    ['C', 'C', 'A', 'T','A', 'T', 'G', 'A','A', 'G'],
    ['A', 'G', 'G', 'T','G', 'G', 'G', 'T','C', 'A']
];

test('scanHorizintalUpright: Finds a match in a horizontal or vertical nxn array that has at least 4 values in a row', () => {
    expect(scanHorizintalUpright(DNA_MOCK)).toBe(true);
});

test('scanHorizintalUpright: Does not find a match in a horizontal or vertical nxn array that has at least 4 values in a row', () => {
    expect(scanHorizintalUpright(DNA_MOCK2)).toBe(false);
});
