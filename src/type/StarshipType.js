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
  name: 'Starship',
  description: 'Starship data',
  fields: () => ({
    id: globalIdField('Starship'),
    _id: {
      type: GraphQLString,
      resolve: starship => starship.url.match(/([\d+])/g).join('')
    },
    name: { type: GraphQLString },
    model: { type: GraphQLString },
    manufacter: { type: GraphQLString },
    costInCredits: {
      type: GraphQLString,
      resolve: starship => starship.cost_in_credits
    },
    length: { type: GraphQLString },
    maxAtmospheringSpeed: {
      type: GraphQLString,
      resolve: starship => starship.max_atmosphering_speed
    },
    crew: { type: GraphQLString },
    passengers: { type: GraphQLString },
    cargoCapacity: {
      type: GraphQLString,
      resolve: starship => starship.cargo_capacity
    },
    consumables: { type: GraphQLString },
    hyperdriveRating: {
      type: GraphQLString,
      resolve: starship => starship.hyperdrive_rating
    },
    mglt: {
      type: GraphQLString,
      resolve: starship => starship.MGLT
    },
    starshipClass: {
      type: GraphQLString,
      resolve: starship => starship.starship_class
    },
    pilots: {
      type: new GraphQLList(PersonType),
      resolve: starship => ApiLoader.load(starship.pilots)
    },
    films: {
      type: new GraphQLList(MovieType),
      resolve: starship => ApiLoader.loadMany(starship.films)
    },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
  interfaces: [NodeInterface]
}) 
