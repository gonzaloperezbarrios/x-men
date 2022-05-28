import ruleDefaultMutant from './ruleDefaultMutant';
import debugDefaultRule from '../libs/logs';

function scanOblique(dna: string[][]): boolean {
    let obliqueCount = 1;
    let previousOblique = null;
    const height = dna.length;
    const width = dna[0].length;
    let isRuleDefaultMutant = false;
    for (let diagonal = 1 - width; diagonal <= height - 1; diagonal += 1) {
        previousOblique = null;
        for (let uprightCount = Math.max(0, diagonal),
            horizontalCount = -Math.min(0, diagonal);
            uprightCount < height && horizontalCount < width;
            uprightCount += 1, horizontalCount += 1) {
            if (previousOblique === dna[uprightCount][horizontalCount]) {
                obliqueCount++;
                if (ruleDefaultMutant(obliqueCount)) {
                    isRuleDefaultMutant = true;
                    debugDefaultRule(obliqueCount, dna[uprightCount][horizontalCount], 'oblique');
                    break;
                }
            } else {
                obliqueCount = 1;
            }
            previousOblique = dna[uprightCount][horizontalCount];
        }
        if (isRuleDefaultMutant) {
            break;
        }
    }
    return isRuleDefaultMutant;
}

export default scanOblique;
