import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// tslint:disable-next-line: no-duplicate-imports
import { OKResponse, ForbiddenResponse } from '@libs/api-gateway';
import { APIGatewayProxyResult } from 'aws-lambda';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import isMutant from '../../application/isMutant';
import { debugWarning } from '@libs/logs';
import { getAllAdn } from 'src/application/persistence';

export const getAll = middyfy(async (): Promise<APIGatewayProxyResult> => {
  const adn = await getAllAdn();
  return OKResponse({
    adn
  });
});

const mutant: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const { dna } = event.body;
    const _isMutant = await isMutant((dna as string[]));
    if (!_isMutant) {
      return ForbiddenResponse({
        message: "Es humano"
      });
    }
    return OKResponse({
      message: "Es mutante"
    });
  } catch (error) {
    debugWarning((error as string));
    return ForbiddenResponse({
      message: `${error}`
    });
  }
};

export const main = middyfy(mutant);
