
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
