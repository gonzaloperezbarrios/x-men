import horizontalAnalyzer from './horizontalAnalyzer';
import ruleDefaultMutant from './ruleDefaultMutant';
import uprightAnalyzer from './uprightAnalyzer';

function scanHorizintalUpright(dna: string[][]): boolean {
    let horizontalCount = 1;
    let uprightCount = 1;
    let previousReversePosition = null;
    let isRuleDefaultMutant = false;
    let concurrentPositition = null;
    let nextPositition = null;
    let concurrentReversePositition = null;
    for (let i = 0; i < dna.length; i++) {
        horizontalCount = 1;
        uprightCount = 1;
        previousReversePosition = null;
        for (let j = 0; j < dna.length; j++) {
            concurrentPositition = dna[i][j];
            nextPositition = dna[i][j + 1];
            concurrentReversePositition = dna[j][i];
            //horizontalCount
            horizontalCount = horizontalAnalyzer(concurrentPositition, nextPositition, horizontalCount);
            if (ruleDefaultMutant(horizontalCount)) {
                isRuleDefaultMutant = true;
                break;
            }
            // uprightCount
            if (previousReversePosition !== null) {
                uprightCount = uprightAnalyzer(concurrentReversePositition, previousReversePosition, uprightCount);
                if (ruleDefaultMutant(uprightCount)) {
                    isRuleDefaultMutant = true;
                    break;
                }
            }
            previousReversePosition = dna[j][i];
        }
        if (isRuleDefaultMutant) {
            break;
        }
    }
    return isRuleDefaultMutant;
}

export default scanHorizintalUpright;
