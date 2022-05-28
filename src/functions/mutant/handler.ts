import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// tslint:disable-next-line: no-duplicate-imports
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import isMutant, { jsonToMatrix } from '../../application/isMutant';

// tslint:disable-next-line: arrow-return-shorthand
const mutant: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { dna } = event.body;
  const _dna = jsonToMatrix(dna);
  let _message = 'Es mutante';
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
};

export const main = middyfy(mutant);
