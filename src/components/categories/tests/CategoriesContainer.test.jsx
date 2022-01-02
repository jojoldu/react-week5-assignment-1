import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import CategoriesContainer from '../CategoriesContainer';

jest.mock('react-redux');

function mockSelector(categories) {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));
}

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('categories가 있을 경우 개수만큼 category가 노출된다', () => {
    const expectName1 = '한식';
    const expectName2 = '중식';
    const categories = [
      { id: 1, name: expectName1 }, { id: 2, name: expectName2 },
    ];
    mockSelector(categories);

    const { getAllByRole } = render(<CategoriesContainer />);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveTextContent(expectName1);
    expect(result[1]).toHaveTextContent(expectName2);
  });
});
