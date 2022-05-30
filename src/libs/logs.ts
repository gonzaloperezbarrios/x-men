import ruleDefaultMutant from '../domain/ruleDefaultMutant';

export function debugInfo(message: string): void {
    console.info(message);
}

export function debugWarning(message: string): void {
    console.warn(message);
}

export function debugError(message: string): void {
    console.error(message);
}

function debugDefaultRule(count: number, concurrentPositition: string, metodo: 'horizonatl' | 'vertical' | 'oblique'): void {
    if (ruleDefaultMutant(count)) {
        console.info(`Es muntante, posición:${concurrentPositition} , método:${metodo}`);
    }
}
export default debugDefaultRule;
