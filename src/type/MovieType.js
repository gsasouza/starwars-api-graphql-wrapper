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
import PersonType from './PersonType';
import VehicleType from './VehicleType';
import StarshipType from './StarshipType';
import SpecieType from './SpecieType';

export default new GraphQLObjectType({
  name: 'Movie',
  description: 'Movie data',
  fields: () => ({
    id: globalIdField('Movie'),
    _id: {
      type: GraphQLString,
      resolve: movie => movie.url.match(/([\d+])/g).join('')
    },
    title: { type: GraphQLString },
    episodeId: { 
      type: GraphQLString,
      resolve: movie => { console.log(movie); return movie.episode_id }
    },
    openingCrawl: {
      type: GraphQLString,
      resolve: movie => movie.opening_crawl
    },
    director: { type: GraphQLString },
    producer: { type: GraphQLString },
    releaseDate: { 
      type: GraphQLString,
      resolve: movie => movie.release_date
    },
    characters: {
      type: new GraphQLList(PersonType),
      resolve: movie => ApiLoader.loadMany(movie.characters)
    },
    planets: {
      type: new GraphQLList(PlanetType),
      resolve: movie => ApiLoader.loadMany(movie.planets)
    },
    starships: {
      type: new GraphQLList(StarshipType),
      resolve: movie => ApiLoader.loadMany(movie.starships)
    },
    vehicles: {
      type: new GraphQLList(VehicleType),
      resolve: movie => ApiLoader.loadMany(movie.vehicles)
    },
    species: {
      type: new GraphQLList(SpecieType),
      resolve: movie => ApiLoader.loadMany(movie.species)
    },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString }
  }),
  interfaces: [NodeInterface]
}) 
