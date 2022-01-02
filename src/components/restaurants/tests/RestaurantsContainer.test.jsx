import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import RestaurantsContainer from '../RestaurantsContainer';

jest.mock('react-redux');

function mockSelector(restaurants) {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));
}

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('restaurants가 있을 경우 개수만큼 restaurant가 노출된다', () => {
    const expectName = '양천주가';

    mockSelector([
      {
        id: 1,
        categoryId: 1,
        name: expectName,
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
    ]);

    const { getAllByRole } = render(<RestaurantsContainer />);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveTextContent(`${expectName} | ${expectCategory} | ${expectAddress}`);
  });
});
