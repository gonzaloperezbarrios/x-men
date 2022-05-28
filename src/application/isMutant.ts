import scanHorizintalUpright from '../domain/scanHorizintalUpright';
import scanOblique from '../domain/scanOblique';

function isMutant(dna: string[][]): boolean {
    const isScan = scanHorizintalUpright(dna) || scanOblique(dna);
    if (isScan) {
        console.log('Es totalmente mutante');
        return true;
    }
    console.log('Es humano');
    return false;
}

export default isMutant;
