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
    const restaurants = [
      {
        id: 1,
        categoryId: 1,
        name: expectName,
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
    ];

    const { getAllByRole } = renderTestComponent(restaurants);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveTextContent(expectName);
  });
});
