import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { NodeField, NodeInterface } from '../interface/NodeInterface';
import PersonType from './PersonType';
import ApiLoader from '../loader/ApiLoader';

const QueryType = new GraphQLObjectType({
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
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});