import {mockAllFilmsResponse} from '@app/test-utils/mock-data';
import {graphql, HttpResponse} from 'msw';

export const handlers = [
  graphql.query('Query', () => {
    return HttpResponse.json(mockAllFilmsResponse);
  }),
];
