import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

import fetch from 'node-fetch'

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'Person data',
  fields: () => ({
    id: globalIdField('Person'),
    _id: {
      type: GraphQLInt,
      resolve: person => person._id,
    },
    name: {
      type: GraphQLString,
      resolve: person => person.name,
    },
    height: {
      type: GraphQLString,
      resolve: person => person.height,
    },  
    mass: {
      type: GraphQLString,
      resolve: person => person.mass,
    },
    hairColor: {
      type: GraphQLString,
      resolve: person => person.hair_color,
    },
    skinColor: {
      type: GraphQLString,
      resolve: person => person.skin_color,
    },
    eyeColor: {
      type: GraphQLString,
      resolve: person => person.eye_color,
    },
    birthYear: {
      type: GraphQLString,
      resolve: person => person.birth_year,
    },
    gender: {
      type: GraphQLString,
      resolve: person => person.gender,
    },
    homeworld: {
      type: GraphQLString,
      resolve: person => person.homeworld,
    },
    created: {
      type: GraphQLString,
      resolve: person => person.created,
    },
    edited: {
      type: GraphQLString,
      resolve: person => person.edited,
    },
    url: {
      type: GraphQLString,
      resolve: person => person.url,
    }
  })
}) 

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    allPersons: {
      type: new GraphQLList(PersonType),
      resolve: async () => {
        const resp = await fetch('https://swapi.co/api/people/');
        const data = await resp.json();
        console.log(data)
        return data.results;
      }
    }
  })
})

export const schema = new GraphQLSchema({
  query: QueryType
})