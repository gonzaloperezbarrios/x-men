import  horizontalAnalyzer  from '../src/domain/horizontalAnalyzer';

test('compares two values and returns one value plus one', () => {
    expect(horizontalAnalyzer("A", "A", 1)).toBe(2);
});
