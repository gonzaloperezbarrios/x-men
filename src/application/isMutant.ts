import scanHorizintalUpright from 'src/domain/scanHorizintalUpright';
import scanOblique from 'src/domain/scanOblique';

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
