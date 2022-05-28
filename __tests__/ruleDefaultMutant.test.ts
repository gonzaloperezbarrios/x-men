import  ruleDefaultMutant  from '../src/domain/ruleDefaultMutant';

test('ruleDefaultMutant: evaluate the default value', () => {
    expect(ruleDefaultMutant(4)).toBe(true);
});
