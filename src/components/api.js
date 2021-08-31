
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

// export const request = async(url) => {
//   try {
//     const response = await fetch(`${BASE_URL}${url}`, {
//       method: 'GET',
//       headers: {
//         Authorization: 'TOKEN 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',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const serverResponse = await response.json();

//     return serverResponse.data || serverResponse;
//   } catch (error) {
//     throw new Error(`Server error: ${error.message}`);
//   }
// };
