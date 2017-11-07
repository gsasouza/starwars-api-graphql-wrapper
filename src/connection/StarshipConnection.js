import {
  GraphQLInt,
} from 'graphql';

import {
  connectionDefinitions,
} from 'graphql-relay';

import StarshipType from '../type/StarshipType';

export default connectionDefinitions({
  name: 'Starship',
  nodeType: StarshipType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});