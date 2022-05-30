import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'mutant',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

export const stats = {
  handler: `${handlerPath(__dirname)}/handler.getAll`,
  events: [
      {
          http: {
              method: 'get',
              path: 'stats/',
          },
      },
  ],
};
