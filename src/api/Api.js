import axios from 'axios';

const host = 'https://eatgo-customer-api.ahastudio.com';

async function request(path) {
  try {
    const response = await axios.get(`${host}${path}`);
    return response.data;
  } catch (e) {
    console.error(`${path} Error`, e);
    return {};
  }
}

export function getRegions() {
  return request('/regions');
}

export function getCategories() {
  return request('/categories');
}

/**
 * @param regionName {string}
 * @param categoryId {number}
 * @returns {Promise<[]>}
 */
export function getRestaurants(regionName, categoryId) {
  return request(`/restaurants?region=${regionName}&category=${categoryId}`);
}
