function ruleDefaultMutant(countRepetitions: number): boolean {
    if (countRepetitions === 4) {
        console.log('Es mutante');
        return true;
    }
    return false;
}

export default ruleDefaultMutant;
