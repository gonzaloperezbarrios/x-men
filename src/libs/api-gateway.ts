import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> };
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

export const OKResponse = (response: Record<string, unknown>) =>
({
  statusCode: 200,
  body: JSON.stringify(response)
});

export const ForbiddenResponse = (response: Record<string, unknown>) =>
({
  statusCode: 403,
  body: JSON.stringify(response)
});
