import { isNotEmpty, isMinimumAllowedLimit, isMinimumAllowedLimitOutside, isLimitExceeded, arrayToMatrix } from '../src/application/middleware';


var DNA_MOCK = [
    ["A", "T", "G", "C", "G", "A"],
    ["C", "A", "G", "T", "G", "C"]
];

var DNA_MOCK2 = [
    ["A", "T", "G", "C", "G", "A"],
    ["C", "A", "G", "T", "G", "C"],
    ["T", "T", "A", "T", "G", "T"],
    ["A", "G", "A", "A", "G", "G"],
    ["C", "C", "C", "C", "T", "A"],
    ["T", "C", "A", "C", "T", "G"]
];

test('isNotEmpty: evaluate that the value is not empty', () => {
    expect(isNotEmpty('ATGCGA')).toBe(true);
});

test('isMinimumAllowedLimit: evaluate the minimum permissible limit value', () => {
    expect(isMinimumAllowedLimit('ATGCGA')).toBe(true);
});

test('isMinimumAllowedLimitOutside: evaluate in the matrix the minimum allowed limit', () => {
    expect(()=>isMinimumAllowedLimitOutside(DNA_MOCK)).toThrow('Base nitrogenada debe ser un arreglo cuadrado minimo de 4');
});

test('isLimitExceeded: evaluate the maximum allowed limit value', () => {
    expect(isLimitExceeded('ATGCGA', 6)).toBe(true);
});

test('arrayToMatrix: transform array to two-dimensional array', () => {
    expect(arrayToMatrix(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"])).toEqual(DNA_MOCK2);
});


