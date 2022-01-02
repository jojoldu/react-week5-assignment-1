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

// eslint-disable-next-line import/prefer-default-export
export function getRegions() {
  return request('/regions');
}
