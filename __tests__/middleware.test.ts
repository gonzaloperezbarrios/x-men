import dnaValidated, { isNotEmpty, isMinimumAllowedLimit, isMinimumAllowedLimitOutside, isLimitExceeded, arrayToMatrix } from '../src/application/middleware';

const DNA_MOCK_ERROR = [ "GTC", "GCT", "CTA"];
const DNA_MOCK_OK = [ "GTCA", "GCTT", "CTAT", "CGCG" ];

const DNA_MOCK2 = [
    ['A', 'T', 'G', 'C', 'G', 'A'],
    ['C', 'A', 'G', 'T', 'G', 'C'],
    ['T', 'T', 'A', 'T', 'G', 'T'],
    ['A', 'G', 'A', 'A', 'G', 'G'],
    ['C', 'C', 'C', 'C', 'T', 'A'],
    ['T', 'C', 'A', 'C', 'T', 'G']
];

const DNA_MOCK3 = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];

test('isNotEmpty: evaluate that the value is not empty', () => {
    expect(isNotEmpty('ATGCGA')).toBe(true);
});

test('isMinimumAllowedLimit: evaluate the minimum permissible limit value', () => {
    expect(isMinimumAllowedLimit('ATGCGA')).toBe(true);
});

test('isMinimumAllowedLimitOutside: evaluate in the matrix the minimum allowed limit', () => {
    expect(() => isMinimumAllowedLimitOutside(DNA_MOCK_ERROR)).toThrow('Base nitrogenada debe ser un arreglo cuadrado minimo de 4');
});

test('isMinimumAllowedLimitOutside: evaluate in the array the minimum allowable limit and it does not fail', () => {
    expect(isMinimumAllowedLimitOutside(DNA_MOCK_OK)).toBe(void 0);
});

test('isLimitExceeded: evaluate the maximum allowed limit value', () => {
    expect(isLimitExceeded('ATGCGA', 6)).toBe(true);
});

test('arrayToMatrix: transform array to two-dimensional array', () => {
    expect(arrayToMatrix(['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'])).toEqual(DNA_MOCK2);
});

test('dnaValidated: evaluate rule isNotEmpty', () => {
    expect(() => dnaValidated(['', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'], 6)).toThrow('Base nitrogenada vacía');
});

test('dnaValidated: evaluate rule isMinimumAllowedLimit', () => {
    expect(() => dnaValidated(['CAC', 'TTATGT', 'AGAAGG'], 6)).toThrow('Base nitrogenada debe tener un mínimo de 4 letras');
});

test('dnaValidated: evaluate rule isLimitExceeded', () => {
    expect(() => dnaValidated(['CACTTTTT', 'TTATGT', 'AGAAGG'], 6)).toThrow('Base nitrogenada debe ser un arreglo cuadrado nxn: CAC');
});

test('dnaValidated: evaluate rule isInvalidCharacter', () => {
    expect(() => dnaValidated(['TTXTGT', 'TTATGT', 'AGAAGG'], 6)).toThrow('Base nitrogenada tiene un carácter invalido: TTXTGT');
});

test('dnaValidated: return two-dimensional array to upper case', () => {
    expect(dnaValidated(['atgcga', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'], 6)).toEqual(DNA_MOCK3);
});
