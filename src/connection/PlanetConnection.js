import {
  GraphQLInt,
} from 'graphql';

import {
  connectionDefinitions,
} from 'graphql-relay';

import PlanetType from '../type/PlanetType';

export default connectionDefinitions({
  name: 'Planet',
  nodeType: PlanetType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});