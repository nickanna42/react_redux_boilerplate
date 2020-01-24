/**
Functions that return actions.
These actions can be `dispatched` by mapping them
to a property of a react component.
**/

export const placeList = (newList) => ({
  type: 'PLACE_LIST',
  data: newList,
});

export const addItem = (newItem) => ({
  type: 'ADD_ITEM',
  data: newItem,
});

export const deleteIndex = (index) => ({
  type: 'DELETE_INDEX',
  data: index,
});
