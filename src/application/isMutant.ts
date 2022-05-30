import { debugInfo } from '@libs/logs';
import scanHorizintalUpright from '../domain/scanHorizintalUpright';
import scanOblique from '../domain/scanOblique';
import dnaValidated, { arrayToMatrix, isMinimumAllowedLimitOutside } from './middleware';
import { createAdn } from './persistence';

async function isMutant(dna: string[]) {
    isMinimumAllowedLimitOutside(dna);
    const _dnaMatrix = arrayToMatrix(dnaValidated(dna, dna.length));
    const _isMutant = scanHorizintalUpright(_dnaMatrix) || scanOblique(_dnaMatrix);
    const response=await createAdn({
        adn: dna,
        isMutant: _isMutant,
    });
    debugInfo(JSON.stringify(response));
    return _isMutant;
}

export default isMutant;
