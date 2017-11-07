import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { NodeField } from '../interface/NodeInterface';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';
import ApiLoader from '../loader/ApiLoader';

import PersonType from './PersonType';
import PlanetType from './PlanetType';
import MovieType from './MovieType';
import VehicleType from './VehicleType';
import StarshipType from './StarshipType';
import SpecieType from './SpecieType';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    node: NodeField,
    allPersons: {
      type: new GraphQLList(PersonType),
      args: {
        page: { type: GraphQLInt }
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/people?page=${args.page}`)
    },    
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/people/${args.id}`),
    },
    allMovies: {
      type: new GraphQLList(MovieType),
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/films`),
    },
    movie: {
      type: MovieType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/films/${args.id}`),
    },
    allPlanets: {
      type: new GraphQLList(PlanetType),
      args: {
        page: { type: GraphQLInt }
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/planets?page=${args.page}`)
    },
    planet: {
      type: PlanetType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/planets/${args.id}`),
    },
    allSpecies: {
      type: new GraphQLList(SpecieType),
      args: {
        page: { type: GraphQLInt }
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/species?page=${args.page}`)
    },
    specie: {
      type: SpecieType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/species/${args.id}`),
    },
    allStarships: {
      type: new GraphQLList(StarshipType),
      args: {
        page: { type: GraphQLInt }
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/starships?page=${args.page}`)
    },
    starship: {
      type: StarshipType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/starships/${args.id}`),
    },
    allVehicles: {
      type: new GraphQLList(VehicleType),
      args: {
        page: { type: GraphQLInt }
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/vehicless?page=${args.page}`)
    },
    vehicle: {
      type: VehicleType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => ApiLoader.load(`https://swapi.co/api/vehicles/${args.id}`),
    },
  }),
});
