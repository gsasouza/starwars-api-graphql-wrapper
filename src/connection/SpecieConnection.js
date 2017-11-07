import {
  GraphQLInt,
} from 'graphql';

import {
  connectionDefinitions,
} from 'graphql-relay';

import SpecieType from '../type/SpecieType';

export default connectionDefinitions({
  name: 'Specie',
  nodeType: SpecieType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});