function uprightAnalyzer(previousReversePosition: string,
                         concurrentReversePositition: string,
                         uprightCount: number): number {
    if (previousReversePosition === concurrentReversePositition) {
        uprightCount++;
        if (uprightCount === 4) {
            console.log('Es mutante en uprightCount', concurrentReversePositition, uprightCount);
        }
    } else {
        uprightCount = 1;
    }
    return uprightCount;
}

export default uprightAnalyzer;
