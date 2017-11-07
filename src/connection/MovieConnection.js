import {
  GraphQLInt,
} from 'graphql';

import {
  connectionDefinitions,
} from 'graphql-relay';

import MovieType from '../type/MovieType';

export default connectionDefinitions({
  name: 'Movie',
  nodeType: MovieType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});