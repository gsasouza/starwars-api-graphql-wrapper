import {
  GraphQLInt,
} from 'graphql';

import {
  connectionDefinitions,
} from 'graphql-relay';

import VehicleType from '../type/VehicleType';

export default connectionDefinitions({
  name: 'Vehicle',
  nodeType: VehicleType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});