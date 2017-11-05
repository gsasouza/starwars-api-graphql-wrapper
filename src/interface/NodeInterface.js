import {
  nodeDefinitions, fromGlobalId
} from 'graphql-relay';

import PersonLoader from '../loader/ApiLoader';

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Person') {
      return personLoader.load(`https://swapi.co/api/people/${id}/`);
    }
    if (type === 'Planet') {
      return personLoader.load(`https://swapi.co/api/planet/${id}/`);
    }
  },
  object => {
    if (object.hasOwnProperty('hairColor')) {
      return 'Person';
    }
    if (object.hasOwnProperty('diameter')) {
      return 'Planet';
    }
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;