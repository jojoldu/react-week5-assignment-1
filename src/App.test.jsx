import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

function mockSelector(restaurants) {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));
}

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('restaurants가 없을 경우엔 초기화면이 노출된다', () => {
    mockSelector([]);

    const { getByText } = render((
      <App />
    ));

    expect(getByText('레스토랑 목록')).not.toBeNull();
  });
});
