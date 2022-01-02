import reducer from '../reducer';

describe('reducer', () => {
  it('입력된 state가 없으면 기본값이 반환된다', () => {
    const state = reducer(undefined, {});

    expect(state.regions).toStrictEqual([]);
    expect(state.categories).toStrictEqual([]);
    expect(state.restaurants).toStrictEqual([]);
  });
});
