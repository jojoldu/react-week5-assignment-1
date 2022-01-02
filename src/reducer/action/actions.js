import toActionObject from './toActionObject';
import ActionType from './ActionType';
import { getCategories, getRegions, getRestaurants } from '../../api/Api';

/**
 *
 * @param regions {array}
 * @returns {*|{payload: Object, type: ActionType}}
 */
export function getFetchRegionsAction(regions) {
  return toActionObject(ActionType.FETCH_REGIONS, {
    regions,
  });
}

export function fetchRegions() {
  return async (dispatch) => {
    const regions = await getRegions();

    dispatch(getFetchRegionsAction(regions));
  };
}

export function getFetchCategoriesAction(categories) {
  return toActionObject(ActionType.FETCH_CATEGORIES, {
    categories,
  });
}

export function fetchCategories() {
  return async (dispatch) => {
    const regions = await getCategories();

    dispatch(getFetchRegionsAction(regions));
  };
}

export function getFetchRestaurantsAction(restaurants) {
  return toActionObject(ActionType.FETCH_RESTAURANTS, {
    restaurants,
  });
}

export function fetchRestaurants() {
  return async (dispatch, getState) => {
    const { checked } = getState();
    const restaurants = await getRestaurants(checked.regionName, checked.categoryId);

    dispatch(getFetchRegionsAction(restaurants));
  };
}
