
const BASE_URL = 'https://api.github.com';

export const request = endpoint => fetch(`${BASE_URL}${endpoint}?client_id="a49cb601e34f95eb52e7"&client_secret="8a3bc2aeb4b46b8dfe22bee291bd1d4ca7f5ebf2"`, {
    method: 'GET',
    })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
