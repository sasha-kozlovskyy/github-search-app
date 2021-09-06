
const BASE_URL = 'https://api.github.com';
const { REACT_APP_GH_TOKEN } = process.env;

export const request = async(url) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${REACT_APP_GH_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const serverResponse = await response.json();

    return serverResponse.items || serverResponse;

};
