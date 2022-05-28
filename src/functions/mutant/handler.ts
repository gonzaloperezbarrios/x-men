import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// tslint:disable-next-line: no-duplicate-imports
import { OKResponse, ForbiddenResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import isMutant from '../../application/isMutant';
import { debugWarning } from '@libs/logs';

const mutant: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const { dna } = event.body;
    let _message = 'Es mutante';
    if (!isMutant((dna as string[]))) {
      _message = 'Es humano';
      return ForbiddenResponse({
        message: _message
      });
    }
    return OKResponse({
      message: _message
    });
  } catch (error) {
    debugWarning((error as string));
    return ForbiddenResponse({
      message: `${error}`
    });
  }
};

export const main = middyfy(mutant);
