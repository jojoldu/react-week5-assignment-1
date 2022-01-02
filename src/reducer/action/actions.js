import toActionObject from './toActionObject';
import ActionType from './ActionType';
import { getRegions } from '../../api/Api';

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
  return null;
}
