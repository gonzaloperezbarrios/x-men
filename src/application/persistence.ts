import AdnModel from '../infrastructure/model/adn';
import adnService from '../infrastructure/services';
import { debugInfo, debugError } from '../libs/logs';
import { sha224 } from 'js-sha256';

export const createAdn = (adnData: AdnModel): void => {
    const { adn, isMutant } = adnData;
    const _adnSha = sha224(adn.toString());
    adnService.create({
        adnId: _adnSha,
        adn: adn,
        isMutant: isMutant,
        status: true,
        createdAt: new Date().toISOString()
    }).then(result => debugInfo(`Insert ADN: ${result}`))
        .catch(error => debugError(`Insert-Error ADN: ${error}`));
};

export const responseAllAdn = (allAdn: AdnModel[], countMutantDna = 0, countHumanDna = 0, ratio = 0) => allAdn.reduce((_accumulator, item) => {
    countMutantDna += item.isMutant ? 1 : 0;
    countHumanDna += item.isMutant ? 0 : 1;
    ratio = countMutantDna / countHumanDna;
    return {
        'count_mutant_dna': countMutantDna,
        'count_human_dna': countHumanDna,
        'ratio': ratio > 0 && ratio !== Infinity ? ratio : 0
    };
}, {
    'count_mutant_dna': 0,
    'count_human_dna': 0,
    'ratio': 0
});

export const getAllAdn = async () => {
    const allAdn = await adnService.getAll();
    return responseAllAdn(allAdn);
};
