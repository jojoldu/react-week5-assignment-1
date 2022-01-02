import ActionType from './action/ActionType';

const initState = {
  regions: [],
  categories: [],
  restaurants: [],
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  if (type === ActionType.FETCH_REGIONS) {
    return {
      ...state,
      regions: payload.regions,
    };
  }

  if (type === ActionType.FETCH_CATEGORIES) {
    return {
      ...state,
      categories: payload.categories,
    };
  }

  return state;
}
