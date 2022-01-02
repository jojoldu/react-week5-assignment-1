import { render } from '@testing-library/react';
import CategoriesView from '../CategoriesView';

CategoriesView.propTypes = {};
describe('CategoriesView', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent(categories) {
    return render((
      <CategoriesView
        categories={categories}
      />
    ));
  }

  it('category 수만큼 노출된다', () => {
    const expectName1 = '한식';
    const expectName2 = '중식';
    const categories = [
      { id: 1, name: expectName1 }, { id: 2, name: expectName2 },
    ];

    const { getByText, getAllByRole } = renderTestComponent(categories);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(2);
    expect(getByText(expectName1)).toBeDefined();
    expect(getByText(expectName2)).toBeDefined();
  });

  it('target과 동일할 경우 category(V)로 노출된다', () => {
    const expectName = '한식';
    const target = 1;
    const regions = [
      { id: target, name: expectName },
    ];

    const { getByRole } = renderTestComponent(regions, target);

    const result = getByRole('button');
    expect(result).toHaveTextContent(`${expectName}(V)`);
  });
});
