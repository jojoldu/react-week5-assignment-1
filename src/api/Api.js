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
