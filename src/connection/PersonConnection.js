import {
  GraphQLInt,
} from 'graphql';

import {
  connectionDefinitions,
} from 'graphql-relay';

import PersonType from '../type/PersonType';

export default connectionDefinitions({
  name: 'Person',
  nodeType: PersonType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
