import { render } from '@testing-library/react';
import RestaurantsView from '../RestaurantsView';

RestaurantsView.propTypes = {};
describe('RestaurantsView', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent(restaurants) {
    return render((
      <RestaurantsView
        restaurants={restaurants}
      />
    ));
  }

  it('restaurants 수만큼 노출된다', () => {
    const expectName = '양천주가';
    const expectAddress = '서울 강남구 123456';
    const restaurants = [
      {
        id: 1,
        categoryId: 1,
        name: expectName,
        address: expectAddress,
        information: '양천주가 in 서울 강남구 123456',
      },
    ];

    const { getByText, getAllByRole } = renderTestComponent(restaurants);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(1);
    expect(getByText(expectName)).toBeDefined();
    expect(getByText(expectAddress)).toBeDefined();
  });
});
