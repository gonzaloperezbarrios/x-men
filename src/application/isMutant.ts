import scanHorizintalUpright from '../domain/scanHorizintalUpright';
import scanOblique from '../domain/scanOblique';
import dnaValidated, { arrayToMatrix, isMinimumAllowedLimitOutside } from './middleware';
import { createAdn } from './persistence';

async function isMutant(dna: string[]) {
    isMinimumAllowedLimitOutside(dna);
    const _dnaMatrix = arrayToMatrix(dnaValidated(dna, dna.length));
    const isScan = scanHorizintalUpright(_dnaMatrix) || scanOblique(_dnaMatrix);
    const response=await createAdn({
        adn: dna,
        isMutant: isScan,
    });
    return response;
}

export default isMutant;
