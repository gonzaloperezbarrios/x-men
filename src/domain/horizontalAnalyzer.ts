import debugDefaultRule from '../shared/logs';

function horizontalAnalyzer(concurrentPositition: string, nextPositition: string, horizontalCount: number): number {
    if (concurrentPositition === nextPositition) {
        horizontalCount++;
        debugDefaultRule(horizontalCount, concurrentPositition, 'horizonatl');
    } else {
        horizontalCount = 1;
    }
    return horizontalCount;
}

export default horizontalAnalyzer;
