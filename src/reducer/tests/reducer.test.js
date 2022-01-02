import reducer from '../reducer';
import {
  getFetchCategoriesAction,
  getFetchRegionsAction,
  getFetchRestaurantsAction,
} from '../action/actions';

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

      expect(state.categories).toHaveLength(1);
      expect(state.categories[0].name).toBe(expectName);
    });
  });

  describe('fetchRestaurants', () => {
    it('restaurants가 조회된다', () => {
      const expectName = '양천주가';
      const state = reducer({}, getFetchRestaurantsAction([
        {
          id: 1,
          categoryId: 1,
          name: expectName,
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        },
      ]));

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].name).toBe(expectName);
    });
  });
});
