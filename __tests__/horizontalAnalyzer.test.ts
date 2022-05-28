import  horizontalAnalyzer  from '../src/domain/horizontalAnalyzer';

test('horizontalAnalyzer: compares two values and returns one value plus one', () => {
    expect(horizontalAnalyzer("A", "A", 1)).toBe(2);
});
