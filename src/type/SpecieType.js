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
import PlanetType from './PlanetType';
import MovieType from './MovieType';

export default new GraphQLObjectType({
  name: 'Specie',
  description: 'Specie data',
  fields: () => ({
    id: globalIdField('Specie'),
    _id: {
      type: GraphQLString,
      resolve: specie => specie.url.match(/([\d+])/g).join('')
    },
    name: { type: GraphQLString },
    classification: { type: GraphQLString },
    averageHeight: {
      type: GraphQLString,
      resolve: specie => specie.average_height
    },
    skinColors: {
      type: GraphQLString,
      resolve: specie => specie.skin_colors
    },
    hairColors: {
      type: GraphQLString,
      resolve: specie => specie.hair_colors
    },
    eyeColors: {
      type: GraphQLString,
      resolve: specie => specie.eye_colors
    },
    averageLifespan: {
      type: GraphQLString,
      resolve: specie => specie.average_lifespan
    },
    homeworld: {
      type: PlanetType,
      resolve: specie => ApiLoader.load(specie.homeworld)
    },
    language: { type: GraphQLString },
    people: {
      type: new GraphQLList(PersonType),
      resolve: specie => ApiLoader.loadMany(specie.people)
    },    
    films: {
      type: new GraphQLList(MovieType),
      resolve: specie => ApiLoader.loadMany(specie.films)
    },   
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
  interfaces: [NodeInterface]
}) 
