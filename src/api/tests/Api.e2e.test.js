import { getCategories, getRegions, getRestaurants } from '../Api';

describe('Api', () => {
  test('region 정보를 API로 가져온다', async () => {
    const result = await getRegions();

    expect(result.length).toBeGreaterThan(1);
  });

  test('categories 정보를 API로 가져온다', async () => {
    const result = await getCategories();

    expect(result.length).toBeGreaterThan(1);
  });

  test('restaurants 정보를 API로 가져온다', async () => {
    const regionName = '서울';
    const categoryId = 1;

    const result = await getRestaurants(regionName, categoryId);

    expect(result.length)
      .toBeGreaterThan(1);
  });
});
