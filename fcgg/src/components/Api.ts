const BASE_URL : string = `https://open.api.nexon.com/fconline/v1`;
const API_KEY : string = "test_5092881508c92e8de394ecca775ddcdc9082b81dbcd138de1011bd980195fd6a86d8f0bb543a868ce6194e617b1046ef";
export function fetchOuid(userName : string) {
  return fetch(`${BASE_URL}/id?nickname=${userName}`, {
    headers: {
      "x-nxopen-api-key" : API_KEY, 
    },
  })
  .then(response => response.json())
  .then(data => )
}