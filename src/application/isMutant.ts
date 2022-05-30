import scanHorizintalUpright from '../domain/scanHorizintalUpright';
import scanOblique from '../domain/scanOblique';
import dnaValidated, { arrayToMatrix, isMinimumAllowedLimitOutside } from './middleware';
import { createAdn } from './persistence';

function isMutant(dna: string[]): boolean {
    isMinimumAllowedLimitOutside(dna);
    const _dnaMatrix = arrayToMatrix(dnaValidated(dna, dna.length));
    const isScan = scanHorizintalUpright(_dnaMatrix) || scanOblique(_dnaMatrix);
    createAdn({
        adn: dna,
        isMutant: isScan,
    });
    return isScan;
}

export default isMutant;
