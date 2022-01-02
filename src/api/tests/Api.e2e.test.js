import { getCategories, getRegions } from '../Api';

describe('Api', () => {
  it('region 정보를 API로 가져온다', async () => {
    const result = await getRegions();

    expect(result.length).toBeGreaterThan(1);
  });

  it('categories 정보를 API로 가져온다', async () => {
    const result = await getCategories();

    expect(result.length).toBeGreaterThan(1);
  });
});
