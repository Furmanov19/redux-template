import uniqBy from 'lodash/uniqBy';

export const convertRelationShipPlays = plays => {
  return plays.map(relationshipPlay => {
    const resourcesRequired = uniqBy(
      relationshipPlay.actions.map(({ owner }) => owner)
    ).map(({ name }) => name);
    return {
      ...relationshipPlay,
      resourcesRequired,
    };
  });
};
