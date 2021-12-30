import { render } from '@testing-library/react';
import RegionsView from '../RegionsView';

RegionsView.propTypes = {};
describe('RegionsView', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent(regions) {
    return render((
      <RegionsView
        regions={regions}
      />
    ));
  }

  it('region 수만큼 노출된다', () => {
    const expectName1 = '서울';
    const expectName2 = '대전';
    const regions = [
      { id: 1, name: expectName1 }, { id: 2, name: expectName2 },
    ];

    const { getByText, getAllByRole } = renderTestComponent(regions);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(2);
    expect(getByText(expectName1)).toBeDefined();
    expect(getByText(expectName2)).toBeDefined();
  });
});
