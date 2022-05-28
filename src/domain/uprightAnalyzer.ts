import debugDefaultRule from '../libs/logs';

function uprightAnalyzer(previousReversePosition: string,
                         concurrentReversePositition: string,
                         uprightCount: number): number {
    if (previousReversePosition === concurrentReversePositition) {
        uprightCount++;
        debugDefaultRule(uprightCount, concurrentReversePositition, 'vertical');
    } else {
        uprightCount = 1;
    }
    return uprightCount;
}

export default uprightAnalyzer;
