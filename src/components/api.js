
const BASE_URL = 'https://api.github.com';

export const request = endpoint => fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: 'TOKEN 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',
    },
    })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
