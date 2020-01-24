/**
Redux boostrapping. Sets the initial state.
Also provides the 'reducer' which takes 'actions` and returns
a new, updated state to the redux store
**/

// Initial State
const initState = {
  list: [],
};

// This is the
export default function(state = initState, action) {
  switch(action.type) {
    case 'PLACE_LIST':
      return {
        ...state,
        list: action.data,
      };

    case 'ADD_ITEM':
      return {
        ...state,
        list: [
          ...state.list,
          action.data,
        ],
      };

    case 'DELETE_INDEX':
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.data),
          ...state.list.slice(action.data + 1)
        ],
      };

    default:
      return state;
  }
}
