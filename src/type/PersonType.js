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

import PlanetType from './PlanetType';
import MovieType from './MovieType';



export default new GraphQLObjectType({
  name: 'Person',
  description: 'Person data',
  fields: () => ({
    id: globalIdField('Person'),
    _id: {
      type: GraphQLString,
      resolve: person => person.url.match(/([\d+])/g).join('')
    },
    name: { type: GraphQLString },
    height: { type: GraphQLString },
    mass: { type: GraphQLString },
    hairColor: {
      type: GraphQLString,
      resolve: person => person.hair_color
    },
    skinColor: {
      type: GraphQLString,
      resolve: person => person.skin_color
    },
    eyeColor: {
      type: GraphQLString,
      resolve: person => person.eye_color
    },
    birthYear: {
      type: GraphQLString,
      resolve: person => person.birth_year
    },
    gender: { type: GraphQLString },
    homeworld: {
      type: PlanetType,
      resolve: person => ApiLoader.load(person.homeworld)
    },
    films: {
      type: new GraphQLList(MovieType),
      resolve: person => ApiLoader.loadMany(person.films)
    },
    // species: {
    //   type: new GraphQLList(SpecieType),
    //   resolve: person => ApiLoader.loadMany(person.species)
    // },
    // vehicles: {
    //   type: new GraphQLList(VehicleType),
    //   resolve: person => ApiLoader.loadMany(person.vehicles)
    // },
    // starships: {
    //   type: new GraphQLList(StarshipType),
    //   resolve: person => ApiLoader.loadMany(person.starships)
    // },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
  interfaces: [NodeInterface]
}) 
