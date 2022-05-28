export const isNotEmpty = (item: string): boolean => item.toString() !== '';

export const isMinimumAllowedLimit = (item: string): boolean => item.length > 3;

export const isMinimumAllowedLimitOutside = (item: any[]): void => {
    if (item.length < 3) {
        throw new Error('Base nitrogenada debe ser un arreglo cuadrado minimo de 4');
    }
};

export const isLimitExceeded = (item: string, lengthMax: number): boolean => item.length === lengthMax;

export const isInvalidCharacter = (item: string): boolean => {
    const r = /[^ATCG]/i;
    return !r.test(item);
};

export const arrayToMatrix = (matrix: any[]): string[][] => matrix.map(function (item) { return item.split(''); });

const dnaValidated = (dna: any[], lengthMax: number) => dna.map(item => {
    if (!isNotEmpty(item)) {
        throw new Error('Base nitrogenada vacía');
    }
    if (!isMinimumAllowedLimit(item)) {
        throw new Error('Base nitrogenada debe tener un mínimo de 4 letras');
    }
    if (!isLimitExceeded(item, lengthMax)) {
        throw new Error(`Base nitrogenada debe ser un arreglo cuadrado nxn: ${item}`);
    }
    if (!isInvalidCharacter(item)) {
        throw new Error(`Base nitrogenada tiene un carácter invalido: ${item}`);
    }
    return item.toString().toUpperCase();
});

export default dnaValidated;
