
const BASE_URL = 'https://api.github.com';

export const request = async(url) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        Authorization: 'TOKEN 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',
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const serverResponse = await response.json();

    return serverResponse.items || serverResponse;

};
