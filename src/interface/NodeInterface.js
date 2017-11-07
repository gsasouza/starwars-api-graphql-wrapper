import {
  nodeDefinitions, fromGlobalId
} from 'graphql-relay';

import ApiLoader from '../loader/ApiLoader';

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    console.log(type, id)
    switch (type) {
      case 'Person': return ApiLoader.load(`https://swapi.co/api/people/${id}/`);
      case 'Planet': return ApiLoader.load(`https://swapi.co/api/planets/${id}/`);
      case 'Movie': return ApiLoader.load(`https://swapi.co/api/films/${id}/`);
      case 'Specie': return ApiLoader.load(`https://swapi.co/api/species/${id}/`);
      case 'Starship': return ApiLoader.load(`https://swapi.co/api/starships/${id}/`);
      case 'Vehicle': return ApiLoader.load(`https://swapi.co/api/vehicles/${id}/`);
    }
  },
  object => {
    if (object.hasOwnProperty('hairColor')) {
      return 'Person';
    }
    if (object.hasOwnProperty('diameter')) {
      return 'Planet';
    }
    if (object.hasOwnProperty('episodeId')) {
      return 'Movie';
    }
    if (object.hasOwnProperty('classification')) {
      return 'Specie';
    }
    if (object.hasOwnProperty('starshipClass')) {
      return 'Starship';
    }
    if (object.hasOwnProperty('vehicleClass')) {
      return 'Vehicle';
    }
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;