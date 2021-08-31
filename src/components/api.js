
const BASE_URL = 'https://api.github.com';

export const request = endpoint => fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    // headers: {
    //   Authorization: 'TOKEN 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',
    // },
    })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
