import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import RegionsContainer from '../RegionsContainer';

jest.mock('react-redux');

function mockSelector(regions) {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));
}

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({}));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('regions가 있을 경우 개수만큼 region이 노출된다', () => {
    const expectName1 = '서울';
    const expectName2 = '대전';
    const regions = [
      { id: 1, name: expectName1 }, { id: 2, name: expectName2 },
    ];
    mockSelector(regions);

    const { getAllByRole } = render(<RegionsContainer />);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveTextContent(expectName1);
    expect(result[1]).toHaveTextContent(expectName2);
  });

  it('render 하는 시점에 dispatch가 1회 수행된다', () => {
    render(<RegionsContainer />);

    expect(dispatch).toBeCalledTimes(1);
  });
});
