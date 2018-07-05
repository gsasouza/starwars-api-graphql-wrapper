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
  name: 'Planet',
  description: 'Planet data',
  fields: () => ({
    id: globalIdField('Planet', (obj) => obj.url.match(/([\d+])/g).join('')),
    _id: {
      type: GraphQLString,
      resolve: planet => planet.url.match(/([\d+])/g).join('')
    },
    name: { type: GraphQLString },
    rotationPeriod: {
      type: GraphQLString,
      resolve: planet => planet.rotation_period
    },
    orbitalPeriod: {
      type: GraphQLString,
      resolve: planet => planet.orbital_period
    },
    diameter: { type: GraphQLString},
    climate: { type: GraphQLString },
    gravity: { type: GraphQLString },
    terrain: { type: GraphQLString },
    surfaceWater: {
      type: GraphQLString,
      resolve: planet => planet.surfaceWater
    }, 
    population: { type: GraphQLString},
    residents: {
      type: new GraphQLList(PersonType),
      resolve: planet => ApiLoader.loadMany(planet.residents)
    },
    films: {
      type: new GraphQLList(MovieType),
      resolve: planet => ApiLoader.loadMany(planet.filmes)
    },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
  interfaces: [NodeInterface]
}) 
