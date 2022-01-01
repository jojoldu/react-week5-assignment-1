import { render } from '@testing-library/react';
import RegionsContainer from '../RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {

  it('regions가 있을 경우 개수만큼 region이 노출된다', () => {

    const { getAllByRole } = render(<RegionsContainer />);

    const result = getAllByRole('listitem');
    expect(result.length).toBeGreaterThan(1);
  });
});
