import { render } from '@testing-library/react';
import RegionsView from '../RegionsView';

RegionsView.propTypes = {};
describe('RegionsView', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent(regions, target) {
    return render((
      <RegionsView
        regions={regions}
        target={target}
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

  it('region은 button으로 노출된다', () => {
    const expectName = '서울';
    const regions = [
      { id: 1, name: expectName },
    ];

    const { getByRole } = renderTestComponent(regions);

    const result = getByRole('button');
    expect(result).toHaveTextContent(expectName);
  });

  it('target과 동일할 경우 지역명(V)로 노출된다', () => {
    const expectName = '서울';
    const target = 1;
    const regions = [
      { id: target, name: expectName },
    ];

    const { getByRole } = renderTestComponent(regions, target);

    const result = getByRole('button');
    expect(result).toHaveTextContent(`${expectName}(V)`);
  });
});
