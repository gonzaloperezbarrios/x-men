function horizontalAnalyzer(concurrentPositition: string, nextPositition: string, horizontalCount: number): number {
    if (concurrentPositition === nextPositition) {
        horizontalCount++;
        if (horizontalCount === 4) {
            console.log('es mutante con la horizontal', concurrentPositition);
        }
    }
    return horizontalCount;
}

export default horizontalAnalyzer;
