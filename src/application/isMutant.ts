import scanHorizintalUpright from '../domain/scanHorizintalUpright';
import scanOblique from '../domain/scanOblique';

export function jsonToMatrix(matrix: any[]): string[][] {
    return matrix.map(function (item) { return item.split(''); });
}

function isMutant(dna: string[][]): boolean {
    const isScan = scanHorizintalUpright(dna) || scanOblique(dna);
    if (isScan) {
        console.log('Es totalmente mutante');
        return true;
    } else {
        console.log('Es humano');
    }
    return false;
}

export default isMutant;
