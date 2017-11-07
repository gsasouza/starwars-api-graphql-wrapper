import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import {
  globalIdField
} from 'graphql-relay';

import { NodeInterface } from '../interface/NodeInterface';
import ApiLoader from '../loader/ApiLoader';

import PersonType from './PersonType';
import MovieType from './MovieType';

export default new GraphQLObjectType({
  name: 'Vehicle',
  description: 'Vehicle data',
  fields: () => ({
    id: globalIdField('Vehicle'),
    _id: {
      type: GraphQLString,
      resolve: vehicle => vehicle.url.match(/([\d+])/g).join('')
    },
    name: { type: GraphQLString },
    model: { type: GraphQLString },
    manufacter: { type: GraphQLString },
    costInCredits: {
      type: GraphQLString,
      resolve: vehicle => vehicle.cost_in_credits
    },
    length: { type: GraphQLString },
    maxAtmospheringSpeed: {
      type: GraphQLString,
      resolve: vehicle => vehicle.max_atmosphering_speed
    },
    crew: { type: GraphQLString },
    passengers: { type: GraphQLString },
    cargoCapacity: {
      type: GraphQLString,
      resolve: vehicle => vehicle.cargo_capacity
    },
    consumables: { type: GraphQLString },
    vehicleClass: {
      type: GraphQLString,
      resolve: vehicle => vehicle.vehicle_class
    },
    pilots: {
      type: new GraphQLList(PersonType),
      resolve: vehicle => ApiLoader.load(vehicle.pilots)
    },
    films: {
      type: new GraphQLList(MovieType),
      resolve: vehicle => ApiLoader.loadMany(vehicle.films)
    },    
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
  interfaces: [NodeInterface]
}) 
