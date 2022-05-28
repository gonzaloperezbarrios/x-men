import ruleDefaultMutant from '../domain/ruleDefaultMutant';

function debugDefaultRule(count: number, concurrentPositition: string, metodo: 'horizonatl' | 'vertical' | 'oblique'): void {
    if (ruleDefaultMutant(count)) {
        console.info(`Es muntante, posición:${concurrentPositition} , método:${metodo}`);
    }
}
export default debugDefaultRule;
