import scanHorizintalUpright from '../domain/scanHorizintalUpright';
import scanOblique from '../domain/scanOblique';
import dnaValidated, { arrayToMatrix, isMinimumAllowedLimitOutside } from './middleware';

function isMutant(dna: string[]): boolean {
    isMinimumAllowedLimitOutside(dna);
    const _dna = arrayToMatrix(dnaValidated(dna, dna.length));
    const isScan = scanHorizintalUpright(_dna) || scanOblique(_dna);
    if (isScan) {
        return true;
    }
    return false;
}

export default isMutant;
