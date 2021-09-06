
const BASE_URL = 'https://api.github.com';

export const request = async(url) => {
    const response = await fetch(`${BASE_URL}${url}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const serverResponse = await response.json();

    return serverResponse.items || serverResponse;

};
