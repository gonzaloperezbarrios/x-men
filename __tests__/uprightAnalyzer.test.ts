import  uprightAnalyzer  from '../src/domain/uprightAnalyzer';

test('uprightAnalyzer: compares two values and returns one value plus one', () => {
    expect(uprightAnalyzer("A", "A", 1)).toBe(2);
});
