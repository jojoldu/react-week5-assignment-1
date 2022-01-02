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

  return state;
}
