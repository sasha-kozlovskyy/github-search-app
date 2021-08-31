
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
