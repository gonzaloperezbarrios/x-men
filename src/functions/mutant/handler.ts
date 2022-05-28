import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// tslint:disable-next-line: no-duplicate-imports
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import isMutant from '../../application/isMutant';
import dnaValidated, { isMinimumAllowedLimitOutside, arrayToMatrix } from '../../application/middleware';

const mutant: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const { dna } = event.body;
    let _message = 'Es mutante';
    isMinimumAllowedLimitOutside(dna);
    const _dna = arrayToMatrix(dnaValidated(dna, dna.length));
    if (!isMutant(_dna)) {
      _message = 'Es humano';
      return formatJSONResponse({
        statusCode: 403,
        message: _message
      });
    }
    return formatJSONResponse({
      message: _message
    });
  } catch (error) {
    return formatJSONResponse({
      statusCode: 403,
      message: `ERROR ${error}`
    });
  }
};

export const main = middyfy(mutant);
