import { responseAllAdn } from '../src/application/persistence';

test('responseAllAdn: evaluate empty response', () => {
    expect(responseAllAdn([])).toEqual({
        'count_mutant_dna': 0,
        'count_human_dna': 0,
        'ratio': 0
    });
});

test('responseAllAdn: evaluate non-empty response', () => {
    expect(responseAllAdn([{
        adnId: '3b4daefbc440aef4aac5ea82bd209d12d149ea0e6904fb599c5ba15d',
        adn: [
            "ATAA",
            "GTAA",
            "GCGG",
            "GAGA"
        ],
        isMutant: false,
        status: true,
        createdAt: '2022-05-30T18:52:45.681Z'
    }])).toEqual({
        "count_mutant_dna": 0,
        "count_human_dna": 1,
        "ratio": 0
    });
});
