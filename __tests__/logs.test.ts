import debugDefaultRule, { debugWarning } from '../src/libs/logs';

test('debugWarning: evaluate the call and parameters', () => {
    expect(debugWarning('test')).toBe(void 0);
});

test('debugDefaultRule: evaluate the call and parameters', () => {
    expect(debugDefaultRule(1, 'test', 'horizonatl')).toBe(void 0);
});
