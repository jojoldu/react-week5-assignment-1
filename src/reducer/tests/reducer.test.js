import reducer from '../reducer';
import { getFetchCategoriesAction, getFetchRegionsAction } from '../action/actions';

describe('reducer', () => {
  it('입력된 state가 없으면 기본값이 반환된다', () => {
    const state = reducer(undefined, {});

    expect(state.regions).toStrictEqual([]);
    expect(state.categories).toStrictEqual([]);
    expect(state.restaurants).toStrictEqual([]);
  });

  describe('fetchRegions', () => {
    it('regions이 조회된다', () => {
      const expectName = '서울';
      const state = reducer({}, getFetchRegionsAction([
        { id: 1, name: expectName },
      ]));

      expect(state.regions).toHaveLength(1);
      expect(state.regions[0].name).toBe(expectName);
    });
  });

  describe('fetchCategories', () => {
    it('categories가 조회된다', () => {
      const expectName = '한식';
      const state = reducer({}, getFetchCategoriesAction([
        { id: 1, name: expectName },
      ]));

      expect(state.regions).toHaveLength(1);
      expect(state.regions[0].name).toBe(expectName);
    });
  });
});
